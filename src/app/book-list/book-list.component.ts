import { Component } from '@angular/core';
import {Book} from "../shared/models/Book";
import {BookListitemComponent} from "../book-listitem/book-listitem.component";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    BookListitemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
}
