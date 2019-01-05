import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {CoreModule} from "./core-module/core.module";

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: './home-module/home.module#HomeModule'
  },
  {
    path: 'login', loadChildren: './login-module/login.module#LoginModule'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
