export interface BattleshipCellJSON {
    ship: boolean;
}

export class BattleshipCell  {
  public ship: boolean;
  constructor(ship: boolean) {
    this.ship = ship;
  }

  public static toJSON(model: BattleshipCell): BattleshipCellJSON {
    return model as BattleshipCellJSON;
  }

}
