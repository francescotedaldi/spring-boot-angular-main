// tslint:disable:typedef
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {TestJSON} from './model/test.model';
import {TestService} from './services/test.service';
import * as TestActions from './test.actions';

@Injectable({providedIn: 'root'})
export class TestEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly testService: TestService
  ) { }

  public getAllTestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(TestActions.getAllTests),
    switchMap(
      (action) => this.testService.getAll()
        .pipe(
          map((tests: TestJSON[]) => TestActions.getAllTestsSuccess({tests})),
          catchError((err, caught) => caught)
        )
    )
  ));

  public getTestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(TestActions.getTest),
    switchMap(
      (action) => this.testService.get(action.id)
        .pipe(
          map((test: TestJSON) => TestActions.getTestSuccess({test})),
          catchError((err, caught) => caught)
        )
    )
  ));

  public saveTestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(TestActions.saveTest),
    switchMap(
      (action) => this.testService.save(action.test)
        .pipe(
          map((test: TestJSON) => TestActions.saveTestSuccess({test})),
          catchError((err, caught) => caught)
        )
    )
  ));

  public editTestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(TestActions.editTest),
    switchMap(
      (action) => this.testService.update(action.test)
        .pipe(
          map((test: TestJSON) => TestActions.editTestSuccess({test})),
          catchError((err, caught) => caught)
        )
    )
  ));

  public deleteTestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(TestActions.deleteTest),
    switchMap(
      (action) => this.testService.delete(action.id)
        .pipe(
          map((test: TestJSON) => TestActions.deleteTestSuccess({test})),
          catchError((err, caught) => caught)
        )
    )
  ));
}
