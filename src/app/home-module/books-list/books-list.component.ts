import { Component, OnInit, AfterViewInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, retry, map } from "rxjs/internal/operators";
import { environment } from "src/environments/environment";
import { Observable, throwError } from "rxjs";
import { Book } from "src/app/interface/book";
import * as $ from "jquery";

declare var $: any;

@Component({
  selector: "app-books-list",
  templateUrl: "./books-list.component.html",
  styleUrls: ["./books-list.component.scss"]
})
export class BooksListComponent implements OnInit {
  ngOnInit(): void {
    this._httpClient
      .get<any>(environment.domain + "api/getBooks")
      .pipe(
        retry(3),
        catchError(<never>this.handleError),
        map(bookData => {
          return bookData.data.map(book => {
            return {
              id: book._id,
              title: book.title,
              subtitle: book.subtitle,
              author: book.author,
              published: book.published,
              publisher: book.publisher,
              description: book.description,
              pages: book.pages,
              website: book.website,
              imagePath: book.imagePath
            };
          });
        })
      )
      .subscribe((bookData: any) => {
        this.books = [...bookData];
      });
  }
  books: any[] = [];
  home: string;
  constructor(private _httpClient: HttpClient) {}

  removeBook(book: Book) {
    this._httpClient
      .delete(environment.domain + "api/deleteBookById/" + book.id)
      .subscribe((res: any) => {
        this.books = [...this.books.filter(bk => bk.id !== book.id)];
        // this._router.navigate(["/login"]);
      });
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
