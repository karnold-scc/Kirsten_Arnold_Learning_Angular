import { Injectable } from '@angular/core';
import {Book} from "../shared/models/Book";
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";
import {bookList} from "../shared/data/mock-content";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(): {books : Book[]} {
    const books: Book[] = bookList;

    return {books};
  }
}
