import { Component } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  __courseService:CourseService;
  allCourses:Course[] = [];
  isEnrolledAlready:boolean = true;

  constructor(__courseService:CourseService){
    this.__courseService = __courseService;
  }

  addCourseDetails(courseName:string,category:string,duration:string,language:string,cost:string,rating:string){
    let durationValue:number = parseInt(duration);
    let ratingValue:number = parseInt(rating);
    let costValue:number = parseInt(cost);
    let course:Course = new Course(courseName, category, durationValue, language, costValue, ratingValue);
    this.allCourses.forEach((course)=>{
      if(course.courseName == course.courseName){
        this.isEnrolledAlready = false;
      }
    });
    if(this.isEnrolledAlready){
      this.allCourses.push(course);
      console.log("Add Course method called :-"+course.courseName);
    } else {
      console.log("Already Exists");
    }
  }
}
