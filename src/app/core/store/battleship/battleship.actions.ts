import {createAction, props} from '@ngrx/store';
import {AckJSON} from '../../model/ack.model';
import {BattleshipGameJSON} from './model/battleship-game.model';
import {BattleshipInstance, BattleshipInstanceJSON} from './model/battleship-instance.model';

export const getAllInstances = createAction(
  '[Settings] Get All Instances',
);

export const getAllInstancesSuccess = createAction(
  '[Settings] Get All Instances Success',
  props<{ instances: BattleshipInstanceJSON[] }>()
);

export const saveInstance = createAction(
  '[Settings] Save Instance',
  props<{ instance: BattleshipInstance }>()
);

export const saveInstanceSuccess = createAction(
  '[Settings] Save Instance Success',
  props<{ ack: AckJSON }>()
);

export const deleteInstance = createAction(
  '[Settings] Delete Instance',
  props<{ instanceId: number }>()
);

export const getGame = createAction(
  '[Battleship] Get Game',
  props<{ instance: BattleshipInstance }>()
);

export const getGameSuccess = createAction(
  '[Battleship] Get Game Success',
  props<{ game: BattleshipGameJSON }>()
);

export const clean = createAction(
  '[Settings] Clean Instances'
);
