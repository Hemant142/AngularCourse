import { Component } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component {
  pageTitle = "Angular Data Binding Practice";
  a: number = 5;
  b: number = 3;

  sum(): number {
    return this.a + this.b;
  }
}
