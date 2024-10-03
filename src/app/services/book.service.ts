import { Injectable } from '@angular/core';
//Removed userList import and added bookList - Matt
import { Observable, of } from 'rxjs';
import { bookList } from '../shared/data/mock-content';
import { Book } from '../shared/models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = bookList;
  constructor() { }
  //Returns all books
  getBooks(): Observable<Book[]>{
    return of(this.books);
  }
  //Create book
  addBook(newBook:Book) : Observable<Book[]>{
    this.books.push(newBook)
    return of(this.books);
  }
//Removed .id and added .title - Matt
  //Update an Existing book
  updateStudent(updatedBook: Book): Observable<Book[]> {
    const index = this.books.findIndex(book => book.title === updatedBook.title);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
    return of(this.books);
  }
  //Delete: Remove a book by ID
  //Changed input parameter from bookID to bookTitle - Matt
  deleteBook(bookTitle : string): Observable<Book[]> {
    this.books = this.books.filter(book => book.title !== bookTitle);
    return of(this.books);
  }
  //changed bookID to bokTitle - Matt
  //Changed function name to getBookByTitle - Matt
  getBookByTitle(bookTitle: string): Observable<Book | undefined> {
    const book :Book | undefined= this.books.find(book => book.title === bookTitle);
    return of(book);
  }
}
