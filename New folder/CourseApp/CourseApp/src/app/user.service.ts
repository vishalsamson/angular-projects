import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user1:User = new User("pawan","pawan123","student");
  user2:User = new User("admin","admin","admin");
  user3:User = new User("vishal","vishal123","student");
  user4:User = new User("chaitanya","chaitanya123","admin");
  user5:User = new User("snehal","snehal123","student");
  user6:User = new User("pratik","pratik123","student");
  user7:User = new User("nusrat","nusrat123","student");
  user8:User = new User("tanmay","tanmay123","admin");
  user9:User = new User("mahesh","mahesh123","student");

  allUsers:User[] = [this.user1,this.user2,this.user3,this.user4,this.user5,this.user6,this.user7,this.user8,this.user9];

  getAllUsers():User[]{
    return this.allUsers;
  }

  getAdminUsers(): User[] {
    let adminUser:User[] = [];
    this.allUsers.forEach(a=>{
      if(a.role == "admin"){
        adminUser.push(a);
      }
    });
    return adminUser;
  }

  getStudentUsers(): User[] {
    let studentUser:User[] = [];
    this.allUsers.forEach(a=>{
      if(a.role == "student"){
        studentUser.push(a);
      }
    });
    return studentUser;
  }  
}
