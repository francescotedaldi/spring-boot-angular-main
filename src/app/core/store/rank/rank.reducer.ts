// tslint:disable:typedef only-arrow-functions
import {createReducer, on} from '@ngrx/store';
import {Rank} from './model/rank.model';
import * as RankActions from './rank.actions';

export interface RankState {
  ranks: Rank[];
}

export const initialState: RankState = {
  ranks: []
};

const reducer = createReducer(
  initialState,
  on(RankActions.getAllRanksSuccess, (state, action) => {
    return {
      ...state,
      ranks: [...action.ranks.map((value) => new Rank(value))]
    };
  }),
  on(RankActions.clean, (state, action) => {
    return {
      ...state,
      ranks: []
    };
  })
);

export function rankReducer(state: RankState | undefined, action) {
  return reducer(state, action);
}
