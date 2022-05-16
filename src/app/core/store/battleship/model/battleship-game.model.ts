import {ActiveModel, Validator} from '../../../model/active.model';
import {BattleshipInstance, BattleshipInstanceJSON} from './battleship-instance.model';

export interface BattleshipGameJSON {
  instance: BattleshipInstanceJSON;
}

const validator = new Validator(
  'Battleship Game',
  ['instance'],
  ['instance']
);

export class BattleshipGame extends ActiveModel {
  public instance: BattleshipInstance;

  constructor(response: BattleshipGameJSON) {
    super(response, validator);
    if (response) {
      this.instance = new BattleshipInstance(response.instance);
    }
  }
}
