import {routerReducer} from '@ngrx/router-store';
import {ActionReducerMap} from '@ngrx/store';
import {AppState} from './app-state';
import * as fromBattleshipReducer from './core/store/battleship/battleship.reducer';
import * as fromCoreReducer from './core/store/core/core.reducer';
import * as fromRankReducer from './core/store/rank/rank.reducer';
import * as fromStorageReducer from './core/store/storage/storage.reducer';
import * as fromTestReducer from './core/store/test/test.reducer';
import * as fromUserReducer from './core/store/user/user.reducer';

export const reducers: ActionReducerMap<AppState> = {
  core: fromCoreReducer.coreReducer,
  test: fromTestReducer.testReducer,
  storage: fromStorageReducer.storageReducer,
  router: routerReducer,
  rank: fromRankReducer.rankReducer,
  user: fromUserReducer.userReducer,
  battleship: fromBattleshipReducer.battleshipReducer
};
