// tslint:disable:typedef only-arrow-functions
import {createReducer, on} from '@ngrx/store';
import * as UserActions from '../user/user.actions';
import {User} from './model/user.model';

export interface UserState {
  user: User;
}

export const initialState: UserState = {
  user: null
};

const reducer = createReducer(
  initialState,
  on(UserActions.loginSuccess, (state, action) => {
    return {
      ...state,
      user: new User(action.user)
    };
  }),
  on(UserActions.logoutSuccess, (state, action) => {
    return {
      ...state,
      user: null
    };
  }),
);

export function userReducer(state: UserState | undefined, action) {
  return reducer(state, action);
}
