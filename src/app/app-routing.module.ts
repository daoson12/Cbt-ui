import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { CreateCourseComponent } from './components/courses/create-course/create-course.component';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './security/login/login.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { DashboardComponent } from "./layout/dashboard/dashboard.component";
import { CreateQuizComponent } from './components/Quiz/create-quiz/create-quiz.component';
import { CarQuoteComponent } from './components/car-quote/car-quote.component';


const routes: Routes = [
{
  path:'', component:LoginComponent
},
{
  path:'sign-up', component:SignUpComponent
},
{
  path:'home', component:HomeComponent,
  children:[
    {
      path:'', component:DashboardComponent
    },
    
    {
      path:'create-course', component:CreateCourseComponent
    },
    {
      path:'course-list', component:CourseListComponent
    },
    {
      path:'create-quiz', component: CreateQuizComponent
    },
    {
      path:'car-quote', component: CarQuoteComponent
    }
  
  ]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
