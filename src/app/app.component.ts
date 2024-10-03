import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from "./shared/models/user";
import {CommonModule} from "@angular/common";
import {Book} from "./shared/models/Book";
import {ContentCardComponent} from "./content-card/content-card.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookListitemComponent} from "./book-listitem/book-listitem.component";
//Fixed Import - Matt
import {BookService} from "./services/book.service";
import {bookList} from "./shared/data/mock-content";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ContentCardComponent, BookListComponent, BookListitemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

//argument of a variable called user, which is type User and returns void
export class AppComponent {
  title?: "";


  protected readonly bookList = bookList;
}
