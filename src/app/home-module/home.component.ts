/**
 * Created by dattaram on 6/1/19.
 */
import { Component, OnInit } from "@angular/core";
import { Book } from "../interface/book";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/internal/operators";
import { environment } from "src/environments/environment";

@Component({
  selector: "home",
  template: `
    <div class="row justify-content-center">
      <div class="col-4">
        <h2 style="color: red">Welcome To Library.....</h2>
      </div>
    </div>
  `
})
export class HomeComponent implements OnInit {}
