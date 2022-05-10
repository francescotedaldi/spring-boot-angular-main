export interface LoginJSON {
  username: string;
  password: string;
}

export class Login {
  public username: string;
  public password: string;

  public static toJSON(login: Login): LoginJSON {
    return login as LoginJSON;
  }

}
