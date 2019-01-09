/**
 * Created by dattaram on 6/1/19.
 */

import {Component, OnInit} from '@angular/core';
import {LoginModel} from "./login.model";
import {RestCallService} from "../core-module/rest-call.service";

@Component({
  selector: 'login',
  template: `

    <div class="row justify-content-center" style="padding-top: 10%">
      <div class="col-3">

        <div class="card ">
          <div class="card-header">
           <h2>Login</h2>
          </div>
          <div class="card-body">
            <form #loginForm="ngForm">
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control"
                       required
                       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                       [(ngModel)]="loginModel.email"
                       name="email"
                       id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input  class="form-control" type="password"
                       required
                       [(ngModel)]="loginModel.password"  
                       name="password"
                       id="exampleInputPassword1" placeholder="Password">
              </div>
            </form>
          </div>
          <div class="card-footer text-muted text-right">
            <button [disabled]="!loginForm.valid" type="submit" class="btn btn-primary" (click)="onLoginClick()">Login</button>
          </div>
        </div>
      </div>
    </div>
  `
})

export class LoginComponent implements OnInit {
  loginModel: LoginModel;
  constructor(private _restCallService: RestCallService) {
  }

  ngOnInit() {
    this.loginModel = new LoginModel();
  }

  onLoginClick() {
   this._restCallService.postRestCall('/login', this.loginModel).subscribe(
     (res) => {

     }
   );
  }
}
