import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  name="";

  read(){
    this.name = localStorage.getItem("name") as string;
  }

}
