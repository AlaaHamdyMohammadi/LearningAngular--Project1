import { CoursesService } from './courses.service';
//Component Decorator
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <!-- <button [style.backgroundColor]="isActive ? 'blue' : 'green' "]>click</button> -->
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <img [src]="img" alt="" />
  `,
})
export class CoursesComponent {
  [x: string]: any;
  title = 'List of courses';
  isActive = true;
  img = './../assets/features-03.jpg';
  courses: any;

  constructor(service: CoursesService) {
    //let service = new CoursesService();
    this.courses = service.getCourses();
  }
}
