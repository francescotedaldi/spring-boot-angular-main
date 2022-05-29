// tslint:disable:prefer-template variable-name
import {animate, state, style, transition, trigger} from '@angular/animations';
import {BattleshipCellState} from '../store/battleship/model/battleship-cell-state.enum';

export const VISIBLE_TO_COVERED_TIME = 500;
export const COVERED_TO_VISIBLE_TIME = 500;

export const BattleshipCellAnimation = trigger('battleship-cell-animation', [
  state(BattleshipCellState.COVERED, style({
    transform: 'rotateY(0deg)'
  })),
  state(BattleshipCellState.VISIBLE, style({
    transform: 'rotateY(180deg)'
  })),
  transition(BattleshipCellState.COVERED + '=>' + BattleshipCellState.VISIBLE, animate(VISIBLE_TO_COVERED_TIME))
]);
