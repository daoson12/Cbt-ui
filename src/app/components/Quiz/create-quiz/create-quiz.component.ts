import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper'

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  private stepper: Stepper;
  private stepper2: Stepper;
  
  constructor() { }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector("#stepper1"), {
      linear: false,
      animation: true,
    });
  }

  next() {
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.stepper.next();
    });
  }

  previous() {
    setTimeout(() => {
      /** spinner ends after 5 seconds */      
      this.stepper.previous();
    });

  }
 
}
