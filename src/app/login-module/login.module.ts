/**
 * Created by dattaram on 6/1/19.
 */
import {NgModule} from '@angular/core';

import {LoginComponent} from "./login.component";
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../core-module/core.module";

const routes: Routes = [
  {
    path: '', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CoreModule.forRoot()],
  exports: [RouterModule],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule {
}
