import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CourseApp';
  isAdmin:boolean = false;
  isStudent:boolean = false;
  clickCount = 0;

  __userService:UserService;
  adminUsers:User[] = [];  
  studentUsers:User[] = [];

  constructor(__userService:UserService)
  {
    this.__userService = __userService;
  }

  getCount(event:any)
  {
    this.clickCount = event as number;
  }

  login(username:string,password:string)
  {   
      this.adminUsers = this.__userService.getAdminUsers();
      this.studentUsers = this.__userService.getStudentUsers();
      this.adminUsers.forEach((a) => {
        if(username == a.username && password == a.password)
        {
          this.isAdmin = true;
          this.isStudent = false;
        }
      });
      this.studentUsers.forEach((a) => {
        if(username == a.username && password == a.password)
        {
          this.isAdmin = false;
          this.isStudent = true;
        }  
      });
    }
}
