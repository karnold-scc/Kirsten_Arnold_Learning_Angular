import { Pipe, PipeTransform } from '@angular/core';
import {Book} from "../shared/models/Book";

@Pipe({
  name: 'genre',
  standalone: true
})
export class GenrePipe implements PipeTransform {

  transform(book : string): string {
    switch (book) {
      case "Fantasy": {
        return `${book} - Mature`;
      }
      case "Science Fiction": {
        return `${book} - Young Adult`;
      }
      case "YA Fantasy": {
        return `${book} - Youth`
      }
      default: {
        return book;
      }
    }
  }

}
