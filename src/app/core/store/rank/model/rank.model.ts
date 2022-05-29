import {ActiveModel, Validator} from '../../../model/active.model';

export interface RankJSON {
  username: string;
  score: number;
}

const validator = new Validator(
  'Rank',
  ['username', 'score'],
  ['username', 'score']
);

export class Rank extends ActiveModel {
  public username: string;
  public score: number;

  constructor(response: RankJSON) {
    super(response, validator);
  }

  public static toJSON(model: Rank): RankJSON {
    return model as RankJSON;
  }
}
