import {routerReducer} from '@ngrx/router-store';
import {ActionReducerMap} from '@ngrx/store';
import {AppState} from './app-state';
// import * as fromCoreReducer from './core/store/core/core.reducer';
import * as fromStorageReducer from './core/store/storage/storage.reducer';
import * as fromUserReducer from './core/store/user/user.reducer';

export const reducers: ActionReducerMap<AppState> = {
  // core: fromCoreReducer.coreReducer,
  storage: fromStorageReducer.storageReducer,
  router: routerReducer,
  user: fromUserReducer.userReducer,
};
