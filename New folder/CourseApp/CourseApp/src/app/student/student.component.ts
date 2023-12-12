import { Component } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  __courseService:CourseService;
  allCourses:Course[] = [];

  constructor(__courseService:CourseService){
    this.__courseService = __courseService;
  }

  filterByCategory(selectedCategory:string){
    if(selectedCategory == "Tech"){
      this.allCourses = this.__courseService.getTechCourses();
    }
    else if(selectedCategory){
      this.allCourses = this.__courseService.getNonTechCourses();
    }
  }
}
