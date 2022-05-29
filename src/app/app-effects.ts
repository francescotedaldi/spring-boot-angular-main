import {BattleshipEffects} from './core/store/battleship/battleship.effects';
import {CoreEffects} from './core/store/core/core.effects';
import {RankEffects} from './core/store/rank/rank.effects';
import {TestEffects} from './core/store/test/test.effects';
import {UserEffects} from './core/store/user/user.effects';

export const effects = [
  CoreEffects,
  TestEffects,
  RankEffects,
  UserEffects,
  BattleshipEffects
];
