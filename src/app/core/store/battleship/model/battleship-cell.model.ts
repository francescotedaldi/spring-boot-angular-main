import { ActiveModel, Validator } from "src/app/core/model/active.model";

export interface BattleshipCellJSON {
    ship: boolean;
  }
  
  const validator = new Validator(
    'Battleship Cell',
    ['ship'],
    ['ship'],
  );
  
  export class BattleshipCell extends ActiveModel {
    public ship: boolean;
    
  
    constructor(response: BattleshipCell) {
      super(response, validator);
    }
  
  }
  