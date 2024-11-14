import {Component, Input} from '@angular/core';
import {Book} from "../shared/models/Book";
import {CurrencyPipe, DatePipe, NgIf, NgOptimizedImage, UpperCasePipe} from "@angular/common";
//import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-book-listitem',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    UpperCasePipe,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './book-listitem.component.html',
  styleUrl: './book-listitem.component.css'
})
export class BookListitemComponent {
  @Input() book?: Book;
  //Not sure if this is correct - Matt
  //book = BookService.getBookByTitle(0);
}
