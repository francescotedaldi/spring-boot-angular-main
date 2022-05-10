import {ErrorType} from '../enums/error-type.enum';
import {ANY} from '../utils/any';

export class Error {
  public type: ErrorType;
  public message: string;

  constructor(error: ANY) {
    this.type = error.type;
    this.message = error.message;
  }

}
