import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/interface/book";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { mimeType } from "./mime-type-validator";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.scss"]
})
export class AddBookComponent implements OnInit {
  book: Book;
  bookForm: FormGroup;
  imagePreview: string;
  constructor(private _httpClient: HttpClient) {
    this.book = new Book();
  }

  ngOnInit() {
    this.bookForm = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      subtitle: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      author: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      published: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      publisher: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      description: new FormControl(null),
      pages: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      website: new FormControl(null),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    });
  }

  onImageUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.bookForm.patchValue({ image: file });
    this.bookForm.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
    console.log(file);
    console.log(this.bookForm);
  }

  addBookHandle() {
    debugger;
    if (this.bookForm.invalid) {
      return;
    }
    this._httpClient
      .post(environment.domain + "api/add-book", this.book)
      .subscribe((res: any) => {
        // this._router.navigate(["/login"]);
        this.bookForm.reset();
      });
  }
}
