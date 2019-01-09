/**
 * Created by dattaram on 6/1/19.
 */

import {NgModule} from '@angular/core';
import {RegisterComponent} from "./register/register.component";
import {CoreModule} from "../core-module/core.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '', component: RegisterComponent
  }
];

@NgModule({
  imports: [CoreModule.forRoot(), RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [RegisterComponent], providers: [],
})
export class UserModule {
}
