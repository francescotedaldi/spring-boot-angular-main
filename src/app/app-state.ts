import {RouterReducerState} from '@ngrx/router-store';
import * as fromBattleshipReducer from './core/store/battleship/battleship.reducer';
import * as fromCoreReducer from './core/store/core/core.reducer';
import * as fromRankReducer from './core/store/rank/rank.reducer';
import * as fromStorageReducer from './core/store/storage/storage.reducer';
import * as fromTestReducer from './core/store/test/test.reducer';
import * as fromUserReducer from './core/store/user/user.reducer';

export interface AppState {
  core: fromCoreReducer.CoreState;
  test: fromTestReducer.TestState;
  storage: fromStorageReducer.StorageState;
  router: RouterReducerState;
  rank: fromRankReducer.RankState;
  user: fromUserReducer.UserState;
  battleship: fromBattleshipReducer.BattleshipState;
}
