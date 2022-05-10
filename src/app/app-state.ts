import {RouterReducerState} from '@ngrx/router-store';
// import * as fromCoreReducer from './core/store/core/core.reducer';
import * as fromStorageReducer from './core/store/storage/storage.reducer';
import * as fromUserReducer from './core/store/user/user.reducer';

export interface AppState {
  // core: fromCoreReducer.CoreState;
  storage: fromStorageReducer.StorageState;
  router: RouterReducerState;
  user: fromUserReducer.UserState;
}
