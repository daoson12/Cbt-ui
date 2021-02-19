import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './security/login/login.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { HomeComponent } from './layout/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { CreateCourseComponent } from './components/courses/create-course/create-course.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { CreateQuizComponent } from './components/Quiz/create-quiz/create-quiz.component';
import { QuizListComponent } from './components/Quiz/quiz-list/quiz-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    CourseListComponent,
    CreateCourseComponent,
    DashboardComponent,
    CreateQuizComponent,
    QuizListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
