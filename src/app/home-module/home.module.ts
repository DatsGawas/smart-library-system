/**
 * Created by dattaram on 6/1/19.
 */
import { NgModule } from "@angular/core";

import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "../core-module/core.module";
import { AddBookComponent } from "./add-book/add-book.component";
import { BooksListComponent } from "./books-list/books-list.component";
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "add-book",
    component: AddBookComponent,
  },
  {
    path: "books",
    component: BooksListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CoreModule.forRoot()],
  exports: [RouterModule],
  declarations: [HomeComponent, AddBookComponent, BooksListComponent],
  providers: [],
})
export class HomeModule {}
