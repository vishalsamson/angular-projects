import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { TempComponent } from './temp/temp.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AdminComponent,
    TempComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
