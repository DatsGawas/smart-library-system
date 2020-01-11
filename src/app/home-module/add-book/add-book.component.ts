import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/interface/book";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.scss"]
})
export class AddBookComponent implements OnInit {
  book: Book;
  constructor(private _httpClient: HttpClient) {
    this.book = new Book();
  }

  ngOnInit() {}

  addBookHandle() {
    this._httpClient
      .post(environment.domain + "api/add-book", this.book)
      .subscribe((res: any) => {
        // this._router.navigate(["/login"]);
      });
  }
}
