import {RouterReducerState} from '@ngrx/router-store';
import * as fromStorageReducer from './core/store/storage/storage.reducer';
import * as fromUserReducer from './core/store/user/user.reducer';
import * as fromBattleshipReducer from './core/store/battleship/battleship.reducer';

export interface AppState {
  storage: fromStorageReducer.StorageState;
  router: RouterReducerState;
  user: fromUserReducer.UserState;
  battleship: fromBattleshipReducer.BattleshipState
}
