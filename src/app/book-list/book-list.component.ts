import {Component, OnInit} from '@angular/core';
import { Book } from '../shared/models/Book';
import { BookListitemComponent } from '../book-listitem/book-listitem.component';
import {AsyncPipe, CommonModule, NgClass, NgForOf} from '@angular/common';
import { BookService } from '../services/book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    CommonModule,
    BookListitemComponent,
    NgForOf,
    NgClass,
    AsyncPipe
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
//We need oninit so we can populate the data before the component finishes init
export class BookListComponent implements OnInit{
  bookList: Book[] = [];
  //Rewritting your constructor to use the BookService correctly - Matt
  //Just setting up DI with the service in the constructor
  constructor(private bookService: BookService) { }

  //We need to call the service to get the data
  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: ( data: Book[]) => this.bookList = data,
      error: err => console.error("Error fetching Books", err),
      complete: () => console.log("Book data fetch complete!")
    });
  }

}
