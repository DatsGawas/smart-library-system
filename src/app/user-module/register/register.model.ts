/**
 * Created by dattaram on 6/1/19.
 */

export class RegisterModel {
  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }
  get emailId(): string {
    return this._emailId;
  }

  set emailId(value: string) {
    this._emailId = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get phoneNo(): number {
    return this._phoneNo;
  }

  set phoneNo(value: number) {
    this._phoneNo = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get conformPassword(): string {
    return this._conformPassword;
  }

  set conformPassword(value: string) {
    this._conformPassword = value;
  }

  private _emailId: string;
  private _firstName: string;
  private _lastName: string;
  private _phoneNo: number;
  private _address: string;
  private _password: string;
  private _conformPassword: string;
  private _gender: string;


  constructor() {
    this.gender = 'male';

  }

}
