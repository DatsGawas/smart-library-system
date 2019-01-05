/**
 * Created by dattaram on 6/1/19.
 */
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RestCallService} from "./rest-call.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [FormsModule, HttpClientModule],
  exports: [FormsModule, HttpClientModule],
  declarations: [],
  providers: [],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        RestCallService
      ]
    };
  }
}
