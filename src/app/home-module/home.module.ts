/**
 * Created by dattaram on 6/1/19.
 */
import {NgModule} from '@angular/core';

import {HomeComponent} from "./home.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule], declarations: [HomeComponent], providers: [],
})
export class HomeModule {
}