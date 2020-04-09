import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "./core-module/core.module";
import { NoopInterceptor } from "./services/noop-interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatPaginatorModule } from "@angular/material/paginator";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: "./home-module/home.module#HomeModule",
  },
  {
    path: "login",
    loadChildren: "./login-module/login.module#LoginModule",
  },
  {
    path: "register",
    loadChildren: "./user-module/user.module#UserModule",
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    CoreModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
