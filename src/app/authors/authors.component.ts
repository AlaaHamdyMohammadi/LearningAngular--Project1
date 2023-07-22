import { Component } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  title = 'List of authors';
  authors: any;

  constructor(author: AuthorsService){
    this.authors = author.getAuthors();
  }
}
