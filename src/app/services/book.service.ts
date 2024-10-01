import { Injectable } from '@angular/core';

import {userList} from "../Shared/data/mock-content.ts";
import { Observable, of } from 'rxjs';
import {Book} from "../Shared/Models/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = bookList;
  constructor() { }
  //Returns all books
  getBooks(): Observable<Book[]>{
    return of(bookList);
  }
  //Create book
  addBook(newBook:Book) : Observable<Book[]>{
    this.books.push(newBook)
    return of(this.books);
  }

  //Update an Existing book
  updateStudent(updatedBook: Book): Observable<Book[]> {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
    return of(this.books);
  }
  //Delete: Remove a book by ID
  deleteBook(bookId : number): Observable<Book[]> {
    this.books = this.books.filter(book => book.id !== bookId);
    return of(this.books);
  }
  getBookByID(bookID: number): Observable<Book | undefined> {
    const book = this.books.find(Book => book.id === bookID);
    return of(book);
  }
}
