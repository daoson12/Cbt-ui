import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper'
@Component({
  selector: 'app-car-quote',
  templateUrl: './car-quote.component.html',
  styleUrls: ['./car-quote.component.css']
})
export class CarQuoteComponent implements OnInit {

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
  
      /** spinner ends after 5 seconds */
      this.stepper.next();
 
  }

  previous() {

      /** spinner ends after 5 seconds */      
      this.stepper.previous();


  }
}
