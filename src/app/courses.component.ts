import { CoursesService } from './courses.service';
//Component Decorator
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <!-- <button class="btn btn-primary" (click)="onSave($event)">Save</button> -->
    <!-- <input #name (keyup.enter)="onKeyUp(name.value)" /> -->
    <h2>{{ course.title | uppercase }}</h2>
    <h2>{{ course.rating | number : '1.1-2' }}</h2>
    <h2>{{ course.students | number }}</h2>
    <h2>{{ course.price | currency }}</h2>
    <h2>{{ course.releaseDate | date }}</h2>
    <h1>{{ text | summary }}</h1>
    
  `,
})
export class CoursesComponent {
  [x: string]: any;
  title = 'List of courses';
  courses: any;

  course = {
    title: 'learning Angular',
    rating: 4.9758,
    students: 2458,
    price: 190.99,
    releaseDate: new Date(2023, 2, 5),
  };

  text = `Lorem ipsum dolor sit amet consectetur adiplllllllllllllllllllllllll corrupti?`;

  constructor(service: CoursesService) {
    //let service = new CoursesService();
    this.courses = service.getCourses();
  }
}
