/**
 * Created by dattaram on 6/1/19.
 */

import {Component, OnInit} from '@angular/core';
import {RegisterModel} from "./register.model";
import {Router} from "@angular/router";

@Component({
   selector: 'register',
  template: `

    <div class="row justify-content-center" style="padding-top: 4%">
      <div class="col-7">

        <div class="card ">
          <div class="card-header">
            <h2>Register</h2>
          </div>
          <div class="card-body">
            <form #registerForm="ngForm">
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <label for="exampleInputFirstName">First Name</label>
                    <input type="text" class="form-control"
                           required
                           [(ngModel)]="registerModel.firstName"
                           name="firstname"
                           id="exampleInputFirstName" aria-describedby="firstname" placeholder="Enter first name">
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label for="exampleInputlastName">Last Name</label>
                    <input type="text" class="form-control"
                           required
                           [(ngModel)]="registerModel.lastName"
                           name="lastname"
                           id="exampleInputlastName" aria-describedby="lastname" placeholder="Enter last name">
                  </div>
                </div>

                <div class="col-6">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control"
                           required
                           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                           [(ngModel)]="registerModel.emailId"
                           name="email"
                           id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label for="exampleInputphoneNo">Phone No</label>
                    <input type="text" class="form-control"
                           required
                           pattern="[789][0-9]{9}"
                           [(ngModel)]="registerModel.phoneNo"
                           name="lastname"
                           id="exampleInputphoneNo" aria-describedby="phoneno" placeholder="Enter phone no">
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input"    name="gender"  [(ngModel)]="registerModel.gender" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male">
                    <label class="form-check-label" for="inlineRadio1">Male</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" name="gender" [(ngModel)]="registerModel.gender" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female">
                    <label class="form-check-label" for="inlineRadio2">Female</label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Address</label>
                    <textarea [(ngModel)]="registerModel.address" name="address" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                </div>

                <div class="col-6">
                  <div class="form-group">
                    <label for="exampleInputPassword">Password</label>
                    <input  class="form-control" type="password"
                            required
                            [(ngModel)]="registerModel.password"
                            name="password"
                            id="exampleInputPassword" placeholder="Password">
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label for="exampleInputconformPassword">Password</label>
                    <input  class="form-control" type="password"
                            required
                            [(ngModel)]="registerModel.conformPassword"
                            name="password"
                            id="exampleInputconformPassword" placeholder="Conform Password">
                  </div>
                </div>
                
              </div>
            </form>
          </div>
          <div class="card-footer text-muted text-right">
            <button [disabled]="!registerForm.valid" type="submit" class="btn btn-primary" (click)="onRegisterClick()">Register</button>
          </div>
        </div>
      </div>
    </div>
  
  `
})

export class RegisterComponent implements OnInit {

  registerModel: RegisterModel;

  constructor(private _router: Router) {
    this.registerModel = new RegisterModel();
  }

  ngOnInit() {
  }

  onRegisterClick() {
    this._router.navigate(['/login']);
  }
}
