/**
 * Created by dattaram on 6/1/19.
 */
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home",
  template: `
    <div class="row justify-content-center">
      <div class="image-class">
        <img src="assets/images/library2.jpg" alt="library" />
      </div>
    </div>
  `
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
}
