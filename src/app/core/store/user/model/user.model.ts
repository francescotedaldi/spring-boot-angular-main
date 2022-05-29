import {Role} from '../../../enums/role.enum';
import {ActiveModel, Validator} from '../../../model/active.model';

export interface UserJSON {
  id: number;
  username: string;
  email: string;
  password: string;
  presentation: string;
  role: Role;
  token: string;
}

const userValidator = new Validator(
    'User',
    [
      'id', 'username', 'email', 'password', 'avatar', 'presentation', 'role', 'token', 'authorities', 'accountNonExpired',
      'accountNonLocked', 'credentialsNonExpired', 'enabled'
    ],
    ['id', 'username', 'email', 'password', 'avatar', 'presentation', 'role', 'token']
);

export class User extends ActiveModel {
  public id: number;
  public username: string;
  public email: string;
  public password: string;
  public avatar: string;
  public presentation: string;
  public role: Role;
  public token: string;

  constructor(response: UserJSON) {
    super(response, userValidator);
  }

  public static toJSON(model: User): UserJSON {
    return model as UserJSON;
  }

}
