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
    const index = this.books.findIndex(user => user.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
    return of(this.students);
  }
  //Delete: Remove a user by ID
  deleteStudent(studentId: number): Observable<User[]> {
    this.students = this.students.filter(user => user.id !== studentId);
    return of(this.students);
  }
  getStudentById(studentId: number): Observable<User | undefined> {
    const student = this.students.find(user => user.id === studentId);
    return of(student);
  }
}
