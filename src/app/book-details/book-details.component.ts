import {Component, OnInit} from '@angular/core';
import {Book} from "../shared/models/Book";
import {BookService} from "../services/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit{
  book:Book | undefined //Undefined because if the button isnt pressed, it has no value
  bookList : Book[] = [] // To store the list of students
  currentIndex:number = 0; //Track which user to display

  //Using my service to get the students
  constructor(private bookService : BookService,
              private router : Router,
              private route: ActivatedRoute
  ) {}
  ngOnInit():void {
    //Need to subscribe to our of
    this.bookService.getBooks().subscribe(users => {
      this.bookList = users
      //Now we need to subscribe to the paramMap Changes
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get("id"))
        if (id) {
          this.currentIndex = this.bookList.findIndex(user => user.id === id)
          this.book = this.bookList[this.currentIndex]
        }
      })
    })
  }

  goBack(){
    this.router.navigate(['/books'])
  }
  goForward(){
    if(this.currentIndex < this.bookList.length-1){
      this.currentIndex++
      this.router.navigate(['/books',this.bookList[this.currentIndex].id])
    }
  }

  goBackward(){
    if(this.currentIndex > 0){
      this.currentIndex--
      this.router.navigate(['/books',this.bookList[this.currentIndex].id])
    }
  }
}
