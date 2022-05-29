import {GameType} from '../../../enums/game-type.enum';
import {ActiveModel, Validator} from '../../../model/active.model';

export interface RankUpdateJSON {
  gameType: GameType;
  instanceId: number;
}

const validator = new Validator(
  'RankUpdate',
  ['gameType', 'instanceId'],
  ['gameType', 'instanceId']
);

export class RankUpdate extends ActiveModel {
  public gameType: GameType;
  public instanceId: number;

  constructor(response: RankUpdateJSON) {
    super(response, validator);
  }

  public static toJSON(model: RankUpdate): RankUpdateJSON {
    return model as RankUpdateJSON;
  }
}
