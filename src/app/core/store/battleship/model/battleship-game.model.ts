import {ActiveModel, Validator} from '../../../model/active.model';
import {BattleshipInstance, BattleshipInstanceJSON} from './battleship-instance.model';
import {BattleshipCell, BattleshipCellJSON} from './battleship-cell.model';


export interface BattleshipGameJSON {
  instance: BattleshipInstanceJSON;
  usercells: BattleshipCellJSON[][];
  pccells: BattleshipCellJSON[][];
}

const validator = new Validator(
  'Battleship Game',
  ['instance'],
  []
);

export class BattleshipGame extends ActiveModel {
  public instance: BattleshipInstance;
  public usercells: BattleshipCell[][];
  public pccells: BattleshipCell[][];

  constructor(response: BattleshipGameJSON) {
    super(response, validator);
    if (response) {
      this.instance = new BattleshipInstance(response.instance);
    }
  }
}
