import {createSelector} from '@ngrx/store';
import {AppState} from '../../../app-state';
import {GameType} from '../../enums/game-type.enum';
import {CoreState} from './core.reducer';

const root = (state: AppState): CoreState => state.core;

export const getGameType = createSelector(
  root,
  (state: CoreState): GameType => state.gameType
);
