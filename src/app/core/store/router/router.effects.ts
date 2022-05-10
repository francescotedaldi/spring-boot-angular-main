// tslint:disable:typedef
import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {dontWaitFor} from '../../utils/dont-wait-for.service';
import * as RouterActions from './router.actions';

@Injectable({ providedIn: 'root' })
export class RouterEffects {

    constructor(
        private readonly actions$: Actions,
        private readonly router: Router,
        private readonly location: Location
    ) { }

    public goEffect$ = createEffect(() => this.actions$.pipe(
        ofType(RouterActions.go),
        tap((action) => {
            dontWaitFor(this.router.navigateByUrl(action.path));
        })
        ), {dispatch: false}
    );

    public goToHomeEffect$ = createEffect(() => this.actions$.pipe(
        ofType(RouterActions.goToHome),
        tap((action) => {
            dontWaitFor(this.router.navigateByUrl('/home'));
        })
        ), {dispatch: false}
    );

    public backEffect$ = createEffect(() => this.actions$.pipe(
        ofType(RouterActions.back),
        tap((action) => this.location.back()),
        ), {dispatch: false}
    );

    public forwardEffect$ = createEffect(() => this.actions$.pipe(
        ofType(RouterActions.forward),
        tap((action) => this.location.forward()),
        ), {dispatch: false}
    );
}
