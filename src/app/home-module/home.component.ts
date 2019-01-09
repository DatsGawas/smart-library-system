/**
 * Created by dattaram on 6/1/19.
 */
import {Component, OnInit} from '@angular/core';
import {Book} from '../interface/book';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/internal/operators";

@Component({
   selector: 'home',
  template: `
    <div class="row justify-content-center">
      <div class="col-3">
        <h2 style="color: red">Welcome To Library.....</h2>
        {{home}}
      </div>
    </div>
    <div class="row">
      <div class="col-4" *ngFor="let book of books">
        <div class="card">
          <div class="card-header">
            <h5>{{book.title}}</h5>
          </div>
          <div class="card-body">
            <a class="card-title"><b>Author :</b> {{book.author}}</a><br>
            <a class="card-title"><b>Publisher :</b> {{book.publisher}}</a>
            <p class="card-text">{{book.description}}</p>
            <a class="btn btn-primary">{{book.pages}}</a>
          </div>
        </div><br>
      </div>
    </div>
  `
})

export class HomeComponent implements OnInit {
  books: any[] = [];
  home: string;
  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
    this._httpClient.get<Book[]>('/getBooks').pipe(
      retry(3),
      catchError(<never>this.handleError),
    ).subscribe(
      (res: Book[]) => {
        this.books = res;
      });

  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}



/*
.subscribe(
  (res: Book[]) => {
    this.books = res;
  },
  (error) => {

  }
);*/
