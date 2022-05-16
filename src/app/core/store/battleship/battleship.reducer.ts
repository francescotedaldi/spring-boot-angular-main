// tslint:disable:typedef only-arrow-functions
import {createReducer, on} from '@ngrx/store';
import {Ack} from '../../model/ack.model';
import * as BattleshipInstancesActions from './battleship.actions';
import {BattleshipGame} from './model/battleship-game.model';
import {BattleshipInstance} from './model/battleship-instance.model';

export interface BattleshipState {
  instances: BattleshipInstance[];
  ack: Ack;
  game: BattleshipGame;
}

export const initialState: BattleshipState = {
  instances: [],
  ack: null,
  game: null
};

const reducer = createReducer(
  initialState,
  on(BattleshipInstancesActions.getAllInstancesSuccess, (state, action) => {
    return {
      ...state,
      instances: [...action.instances.map((value) => new BattleshipInstance(value))]
    };
  }),
  on(BattleshipInstancesActions.saveInstanceSuccess, (state, action) => {
    return {
      ...state,
      ack: new Ack(action.ack)
    };
  }),
  on(BattleshipInstancesActions.getGameSuccess, (state, action) => {
    return {
      ...state,
      game: new BattleshipGame(action.game)
    };
  }),
  on(BattleshipInstancesActions.clean, (state, action) => {
    return {
      instances: [],
      ack: null,
      game: null
    };
  })
);

export function battleshipReducer(state: BattleshipState | undefined, action) {
  return reducer(state, action);
}
