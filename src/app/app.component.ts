import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from "./shared/models/user";
import {CommonModule} from "@angular/common";
import {A2} from "./shared/models/Book";
import {ContentCardComponent} from "./content-card/content-card.component";
import {BookListComponent} from "./book-list/book-list.component";
interface IContent{
    id:number,
    imageUrl:string,
    body:string,
    type:string

}
// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ContentCardComponent, BookListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

//argument of a variable called user, which is type User and returns void
export class AppComponent {
  title?: "";

contentArray:IContent[] = [
  {
    id: 1,
    imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    body: 'This is the body of the content' ,
   type: 'news'
  },
  {
    id: 2,
    imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    body: 'This is the body of the second content' ,
    type: 'news'
  },
  {
    id: 3,
    imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    body: 'This is the body of the last content' ,
    type: 'news'
  }
];
}
