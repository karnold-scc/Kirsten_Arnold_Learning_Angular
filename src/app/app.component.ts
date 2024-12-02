import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {User} from "./shared/models/user";
import {CommonModule} from "@angular/common";
import {Book} from "./shared/models/Book";
import {ContentCardComponent} from "./content-card/content-card.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookListitemComponent} from "./book-listitem/book-listitem.component";
//import {BookService} from "./services/book.service";
import {bookList} from "./shared/data/mock-content";
import {MatListModule} from "@angular/material/list";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ContentCardComponent, BookListComponent, BookListitemComponent, RouterLinkActive, RouterLink, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

//argument of a variable called user, which is type User and returns void
export class AppComponent {
  title?: "MAD 307";


  protected readonly bookList = bookList;
}
