/**
 * Created by dattaram on 6/1/19.
 */

export class LoginModel {
  private _email: string;
  private _password: string;

  constructor() {
    this._email = '';
    this._password = '';
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}
