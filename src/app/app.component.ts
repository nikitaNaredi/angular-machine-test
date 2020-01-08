import { Component, OnInit } from '@angular/core';
import { dummyEmployees } from '../assets/dummy-employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-machine-test';
  dummyEmployeesData = dummyEmployees();

  ngOnInit() {
    console.log(this.dummyEmployeesData);
  }
}
