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
  private dimension: number;

  constructor(response: BattleshipGameJSON) {
    super(response, validator);
    if (response) {
      this.instance = new BattleshipInstance(response.instance);
      this.dimension = 10;
      this.usercells = [];
      this.pccells = [];
      for (let i = 0; i < this.getDimension(); i++) {
        this.usercells[i] = [];
        this.pccells[i] = [];
      }
      for (let i = 0; i < this.getDimension(); i++) {
        for (let j = 0; j < this.getDimension(); j++) {
          this.usercells[i][j] = new BattleshipCell();
          this.pccells[i][j] = new BattleshipCell();
        }
      }
    }
  }

  public getDimension(): number {
    return  this.dimension;
  }
}
