import {ActiveModel, Validator} from '../../../model/active.model';
import {BattleColor} from "../../../enums/battlecolor.enum";

export interface BattleshipInstanceJSON {
  id: number;
  name: string;
  time: number;
  color: BattleColor;
  columns: number;

}

const validator = new Validator(
  'Instance',
  ['id', 'name', 'time', 'color'],
  ['id', 'name', 'time', 'color']
);

export class BattleshipInstance extends ActiveModel {
  public id: number;
  public name: string;
  public time: number;
  public color: BattleColor;
  public columns: number;

  constructor(response: BattleshipInstanceJSON) {
    super(response, validator);
    this.columns = 10;
  }

  public static toJSON(model: BattleshipInstance): BattleshipInstanceJSON {
    return model as BattleshipInstanceJSON;
  }
}
