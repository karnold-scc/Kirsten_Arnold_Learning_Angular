import {Component, OnInit} from '@angular/core';
import {Book} from "../shared/models/Book";
import {BookService} from "../services/book.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {catchError, map, of, switchMap} from "rxjs";
//import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
@Component({
  selector: 'app-modify-book',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit{
  bookForm: FormGroup;
  book: Book | undefined;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      genre: ['', Validators.required],
      author: ['', Validators.required],
      yearReleased: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('id');
    if (title) {
      this.bookService.getBookByTitle(title).subscribe(book => {
        if(book) {
          this.book = book;

          this.bookForm.patchValue(book);
        }
      });
    }
  }

  onSubmit(): void {
    const book: Book = this.bookForm.value;

    // Check if we're updating an existing student
    if (book.title) {
      this.bookService.updateStudent(book);
    } else {
      // For adding a new student, generate a new ID
      this.bookService.addBook(book);
    }

    this.router.navigate(['/book']);
  }

  onDelete(): void { //Aha Here! You said .get('id') but you dont have that, changed to title
    const id = this.bookForm.get('title')?.value;
    console.log(id);
    if (id) {
      this.bookService.deleteBook(id);
      this.router.navigate(['/book']);
    }
  }

  navigateToBookList(): void {
    this.router.navigate(['/book']);
  }
}
