/**
 * Created by dattaram on 6/1/19.
 */

export class RegisterModel {
  emailId: string;
  firstName: string;
  lastName: string;
  phoneNo: number;
  address: string;
  password: string;
  conformPassword: string;
  gender: string;

  constructor() {
    this.gender = "male";
  }
}
