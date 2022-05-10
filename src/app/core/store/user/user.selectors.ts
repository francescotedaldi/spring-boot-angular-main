import {createSelector} from '@ngrx/store';
import {AppState} from '../../../app-state';
import {User} from './model/user.model';
import {UserState} from './user.reducer';

const root = (state: AppState): UserState => state.user;

export const getUser = createSelector(
    root,
    (state: UserState): User => state.user
);
