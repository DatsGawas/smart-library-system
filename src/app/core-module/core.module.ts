/**
 * Created by dattaram on 6/1/19.
 */
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RestCallService } from "./rest-call.service";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [FormsModule, HttpClientModule, CommonModule, ReactiveFormsModule],
  exports: [FormsModule, HttpClientModule, CommonModule, ReactiveFormsModule],
  declarations: [],
  providers: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [RestCallService]
    };
  }
}
