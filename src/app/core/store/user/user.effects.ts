// tslint:disable:typedef
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType, ROOT_EFFECTS_INIT} from '@ngrx/effects';
import {catchError, filter, map, mapTo, switchMap, tap} from 'rxjs/operators';
import {Ack} from '../../model/ack.model';
import * as UserActions from '../user/user.actions';
import {User, UserJSON} from './model/user.model';
import {UserService} from './services/user.service';

@Injectable({providedIn: 'root'})
export class UserEffects {

    constructor(
        private readonly actions$: Actions,
        private readonly userService: UserService
    ) { }

    public initEffect$ = createEffect(() => this.actions$.pipe(
        ofType(ROOT_EFFECTS_INIT),
        // get token
        mapTo(this.userService.getUser()),
        // we want dispatch an action only when an accessToken is found in localStorage
        filter((user: User) => !!user && !!user.token),
        // save token in localStorage
        map((user: User) => UserActions.loginSuccess({user}))
    ));

    public saveEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.saveUser),
            switchMap(
                (action) => this.userService.save(action.user)
                    .pipe(
                        map((user: UserJSON) => UserActions.saveUserSuccess({user})),
                        catchError((err, caught) => caught)
                    )
            )
        )
    );

    public loginEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.login),
            switchMap(
                (action) => this.userService.login(action.login)
                    .pipe(
                        map((user: UserJSON) => UserActions.loginSuccess({user})),
                        catchError((err, caught) => caught)
                    )
            )
        )
    );

    public loginSuccessEffects$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loginSuccess),
            tap((action) => this.userService.storeUser(new User(action.user)))
        ), { dispatch: false }
    );

    public logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.logout),
            switchMap(
                (action) => this.userService.logout()
                    .pipe(
                        map((result: Ack) => UserActions.logoutSuccess()),
                        catchError((err, caught) => caught)
                    )
            )
        )
    );

    public logoutSuccessEffects$ = createEffect(() =>
            this.actions$.pipe(
                ofType(UserActions.logoutSuccess),
                tap((action) => this.userService.storeUser(null))
            ),
        { dispatch: false }
    );

}
