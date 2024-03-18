import { Component } from '@angular/core';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component {
  handleButtonClick() {
    console.log("Button clicked");
  }
}
