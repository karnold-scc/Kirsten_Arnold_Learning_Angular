import {Component, Input} from '@angular/core';
import {Book} from "../shared/models/Book";

@Component({
  selector: 'app-book-listitem',
  standalone: true,
  imports: [],
  templateUrl: './book-listitem.component.html',
  styleUrl: './book-listitem.component.css'
})
export class BookListitemComponent {
  @Input() book?: any;
}
