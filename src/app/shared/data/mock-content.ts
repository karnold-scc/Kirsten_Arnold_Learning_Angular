//Fixed import statement
import { Book } from '../models/Book';
/*
Maybe bind a new book thats added from the form to this image?
https://store.bookbaby.com/bookshop/OnePageBookCoverImage.jpg?BookID=BK90012193&abOnly=False

 */
export const bookList: Book[] = [
  {
    title: "Harry Potter",
    genre: "Fantasy",
    author: "J.K. Rowling",
    yearReleased: 1996,
    image: "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg"

  },
  {
    title: "Fourth Wing",
    genre: "Fantasy",
    author: "Rebecca Yarros",
    yearReleased: 2020,
    image: "https://cdn.kobo.com/book-images/364660ed-f337-455e-9bbf-c9474af9488e/1200/1200/False/fourth-wing.jpg"
  },
  {
    title: "The Hunger Games",
    genre: "Science Fiction",
    author: "Suzanne Collins",
    yearReleased: 2010,
    image: "https://m.media-amazon.com/images/M/MV5BMTcxNDI2NDAzNl5BMl5BanBnXkFtZTgwODM3MTc2MjE@._V1_.jpg"
  },
  {
    title: "Divergent",
    genre: "Science Fiction",
    author: "Veronica Roth",
    yearReleased: 2010,
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1618526890i/13335037.jpg"
  }
];
