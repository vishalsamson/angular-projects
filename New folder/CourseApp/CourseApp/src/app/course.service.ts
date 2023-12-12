import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  course1:Course = new Course("Java", "Tech", 3, "English", 3500, 4);
  course2:Course = new Course("Buisness Analyst", "Non-Tech", 12, "English", 70000, 4.5);
  course3:Course = new Course("Finance", "Non-Tech", 24, "English", 49000, 3);
  course4:Course = new Course("FSD-Angular", "Tech", 9, "English", 50000, 5);
  course5:Course = new Course("Sales", "Non-Tech", 6, "English", 4000, 3.5);
  course6:Course = new Course("Python", "Tech", 7, "English", 3500, 4.5);
  course7:Course = new Course("FrontEnd", "Tech", 5, "English", 5000, 4);
  course8:Course = new Course("Graphic Designer", "Non-Tech", 6, "English", 15000, 4);
  course9:Course = new Course("Data Science", "Tech", 12, "English", 55000, 4.9);
  course10:Course = new Course("Human Resourse", "Non-Tech", 16, "English", 60000, 4.5);

  allCourses:Course[] = [this.course1,this.course2,this.course3,this.course4,this.course5,this.course6,this.course7,this.course8,this.course9,this.course10];

  getAllCourses():Course[]{
    return this.allCourses;
  }

  getNonTechCourses(){
    let nonTechCourses:Course[] = [];
    this.allCourses.forEach(course =>{
      if(course.category == "Non-Tech"){
        nonTechCourses.push(course);
      }
    });
    return nonTechCourses;
  }

  getTechCourses(){
    let techCourses:Course[] = [];
    this.allCourses.forEach(course =>{
      if(course.category == "Tech"){
        techCourses.push(course);
      }
    });
    return techCourses;
  }
}
