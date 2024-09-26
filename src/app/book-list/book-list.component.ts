import { Component } from '@angular/core';
import {Book} from "../shared/models/Book";
import {BookListitemComponent} from "../book-listitem/book-listitem.component";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    BookListitemComponent
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
bookList:Book[] = [{
  title:"Harry Potter",
  genre: "Fantasy",
  author:"Jk Rowling",
  yearReleased:1996
},
  {
    title:"Fourth Wing",
    genre: "Fantasy",
    author:"Rebecca Yarros",
    yearReleased:2020
  },
  {
    title:"The Hunger Games",
    genre: "Science Fiction",
    author:"Suzanne Collins",
    yearReleased:2010
  },
  {
    title:"Divergent",
    genre: "Science Fiction",
    author:"Person",
    yearReleased:2010
  }];
}
