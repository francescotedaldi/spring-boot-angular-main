import {ActiveModel, Validator} from '../../../model/active.model';

export interface TestJSON {
  id: string;
  name: string;
}

const validator = new Validator(
    'Test',
    ['id', 'name'],
    ['id', 'name']
);

export class Test extends ActiveModel {
  public id: string;
  public name: string;

  constructor(response: TestJSON) {
    super(response, validator);
  }

  public static toJSON(model: Test): TestJSON {
    return model as TestJSON;
  }
}
