import {ActiveModel, Validator} from './active.model';

export interface AckJSON {
  result: boolean;
  message: string;
}

const validator = new Validator(
  'Ack',
  ['result', 'message'],
  ['result', 'message']
);

export class Ack extends ActiveModel {
  public result: boolean;
  public message: string;

  constructor(response: AckJSON) {
    super(response, validator);
  }
}
