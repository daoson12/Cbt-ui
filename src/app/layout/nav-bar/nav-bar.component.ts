import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoCreateCourse(){
    this.router.navigate(['home/create-course']);

  }
  gotoCourseList(){
    this.router.navigate(['home/course-list']);
  }

  gotoDashboard(){
    this.router.navigate(['home/']);

  }
  gotoCreateQuiz(){
    this.router.navigate(['home/create-quiz']);
  }
}
