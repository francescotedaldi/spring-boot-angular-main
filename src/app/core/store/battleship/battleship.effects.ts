// tslint:disable:typedef
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AckJSON} from '../../model/ack.model';
import * as BattleshipInstancesActions from './battleship.actions';
import {BattleshipGameJSON} from './model/battleship-game.model';
import {BattleshipInstanceJSON} from './model/battleship-instance.model';
import {BattleshipGameService} from './services/battleship-game.service';
import {BattleshipInstanceService} from './services/battleship-instance.service';

@Injectable({providedIn: 'root'})
export class BattleshipEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly battleshipInstanceService: BattleshipInstanceService,
    private readonly battleshipGameService: BattleshipGameService
  ) { }

  public getAllInstancesEffect$ = createEffect(() => this.actions$.pipe(
    ofType(BattleshipInstancesActions.getAllInstances),
    switchMap(
      () => this.battleshipInstanceService.getAll()
        .pipe(
          map((instances: BattleshipInstanceJSON[]) => BattleshipInstancesActions.getAllInstancesSuccess({ instances })),
          catchError((err, caught) => caught)
        )
    )
  ));

  public saveInstanceEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BattleshipInstancesActions.saveInstance),
      switchMap(
        (action) => this.battleshipInstanceService.save(action.instance)
          .pipe(
            map((ack: AckJSON) => BattleshipInstancesActions.saveInstanceSuccess({ ack })),
            catchError((err, caught) => caught)
          )
      )
    )
  );

  public deleteInstanceEffect$ = createEffect(() => this.actions$.pipe(
    ofType(BattleshipInstancesActions.deleteInstance),
    switchMap(
      (action) => this.battleshipInstanceService.delete(action.instanceId)
        .pipe(
          map(() => BattleshipInstancesActions.getAllInstances()),
          catchError((err, caught) => caught)
        )
    )
  ));

  public getGameEffect$ = createEffect(() =>
    this.actions$.pipe(ofType(BattleshipInstancesActions.getGame),
      switchMap(
        (action) => this.battleshipGameService.get(action.instance)
          .pipe(
            map((game: BattleshipGameJSON) => BattleshipInstancesActions.getGameSuccess({ game })),
            catchError((err, caught) => caught)
          )
      )
    )
  );
}
