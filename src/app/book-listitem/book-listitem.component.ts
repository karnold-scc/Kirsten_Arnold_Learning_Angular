import { Component, Input, OnInit } from '@angular/core';
import { Book } from "../shared/models/Book";
import { NgIf, NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-book-listitem',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './book-listitem.component.html',
  styleUrls: ['./book-listitem.component.css']
})
export class BookListitemComponent implements OnInit {
  @Input() book?: Book;

  ngOnInit() {
    if (this.book && this.book.image) {
      console.log("Book Url:" + this.book.image);
    }
  }
}
