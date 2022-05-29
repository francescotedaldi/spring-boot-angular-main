import {BattleColor} from '../../../enums/battlecolor.enum';
import {ActiveModel, Validator} from '../../../model/active.model';

export interface BattleshipInstanceJSON {
  id: number;
  name: string;
  moves: number;
  color: BattleColor;
}

const validator = new Validator(
  'BattleshipInstance',
  ['id', 'name', 'moves', 'color'],
  ['id', 'name', 'moves', 'color']
);

export class BattleshipInstance extends ActiveModel {
  public id: number;
  public name: string;
  public moves: number;
  public color: BattleColor;

  constructor(response: BattleshipInstanceJSON) {
    super(response, validator);
  }

  public static toJSON(model: BattleshipInstance): BattleshipInstanceJSON {
    return model as BattleshipInstanceJSON;
  }
}
