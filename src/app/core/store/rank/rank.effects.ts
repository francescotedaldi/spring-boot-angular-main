// tslint:disable:typedef
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AckJSON} from '../../model/ack.model';
import {RankJSON} from './model/rank.model';
import * as RankActions from './rank.actions';
import {RankService} from './services/rank.service';

@Injectable({providedIn: 'root'})
export class RankEffects {

  constructor(
      private readonly actions$: Actions,
      private readonly rankService: RankService
  ) { }

  public getAllRankEffect$ = createEffect(() => this.actions$.pipe(
      ofType(RankActions.getAllRanks),
      switchMap(
          (action) => this.rankService.getAll(action.gameType)
              .pipe(
                  map((ranks: RankJSON[]) => RankActions.getAllRanksSuccess({ranks})),
                  catchError((err, caught) => caught)
              )
      )
  ));

  public saveRankEffect$ = createEffect(() => this.actions$.pipe(
      ofType(RankActions.saveRank),
      switchMap(
          (action) => this.rankService.save(action.rankUpdate)
              .pipe(
                  map((ack: AckJSON) => RankActions.saveRankSuccess({ ack })),
                  catchError((err, caught) => caught)
              )
      )
  ));

}
