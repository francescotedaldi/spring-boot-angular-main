// tslint:disable:typedef only-arrow-functions
import {createReducer, on} from '@ngrx/store';
import {GameType} from '../../enums/game-type.enum';
import * as CoreActions from './core.actions';

export interface CoreState {
    gameType: GameType;
}

export const initialState: CoreState = {
    gameType: GameType.HOME
};

const reducer = createReducer(
    initialState,
    on(CoreActions.changeGame, (state, action) => {
        return {
            gameType: action.gameType
        };
    }),
);

export function coreReducer(state: CoreState | undefined, action) {
    return reducer(state, action);
}
