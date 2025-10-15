import {Component, OnInit} from '@angular/core';
import {Book} from "../shared/models/Book";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../services/book.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit {
//Needs to be | undef because there wont always be a student thats clicked on
  book: Book | undefined; //The student to display
  bookList: Book[] = [];// to store the list of students
  currentIndex: number = 0;//to track the current index

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}
//rewrite onInit to get the list of students and the current student
  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books => {
      this.bookList = books;

      // Subscribe to paramMap changes to actually see the page changing
      //If we dont do this, the URL will change but the view will not
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if (id) {
          this.currentIndex = this.bookList.findIndex(user => user.id === id);
          this.book = this.bookList[this.currentIndex];
        }
      });
    });

    console.log(this.book);
  }

//function to go back to student-list view
  goBack(): void {
    this.router.navigate(['/book']);
  }

//function to move foward through array with overflow protection
  goForward(): void {
    if (this.currentIndex < this.bookList.length - 1) {
      this.currentIndex++;
      this.router.navigate(['/books', this.bookList[this.currentIndex].id]);
    }
  }
//function to move backward through array with overflow protection
  goBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/books', this.bookList[this.currentIndex].id]);
    }
  }
}
