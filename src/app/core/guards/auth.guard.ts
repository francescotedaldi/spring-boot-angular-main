import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {AppState} from '../../app-state';
import * as RouterActions from '../../core/store/router/router.actions';
import * as UserSelectors from '../../core/store/user/user.selectors';
import {User} from '../store/user/model/user.model';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private readonly store: Store<AppState>
    ) { }

    public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.store.pipe(
            select(UserSelectors.getUser),
            map((user: User) => {
                const roles = route.data.roles;
                if (!!user) {
                    if (!roles || !roles.length) {
                        return true;
                    }

                    return roles.includes(user.role);
                }

                return false;
            }),
            tap((isLogged: boolean) => {
                if (!isLogged) {
                    this.store.dispatch(RouterActions.goToHome());
                }
            })
        );
    }
}
