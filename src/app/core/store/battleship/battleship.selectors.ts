import {createSelector} from '@ngrx/store';
import {AppState} from '../../../app-state';
import {Ack} from '../../model/ack.model';
import {BattleshipState} from './battleship.reducer';
import {BattleshipGame} from './model/battleship-game.model';
import {BattleshipInstance} from './model/battleship-instance.model';

const root = (state: AppState): BattleshipState => state.battleship;

export const getInstances = createSelector(
  root,
  (state: BattleshipState): BattleshipInstance[] => state.instances
);

export const check = createSelector(
  root,
  (state: BattleshipState): Ack => state.ack
);
export const getGame = createSelector(
  root,
  (state: BattleshipState): BattleshipGame => state.game
);
