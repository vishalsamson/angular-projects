import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {

  count:number = 0;
  
  @Output()  send = new EventEmitter<string>();
  doClick(name:string){
    this.count++;
    this.send.emit(this.count+'');
    localStorage.setItem('name',name);
  }

}
