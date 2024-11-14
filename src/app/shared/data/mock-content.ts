//Fixed import statement
import { Book } from '../models/Book';

export const bookList: Book[] = [
  {
    title: "Harry Potter",
    genre: "YA Fantasy",
    author: "J.K. Rowling",
    yearReleased: new Date(1997, 6, 26),
    price: 16.99
  },
  {
    title: "Fourth Wing",
    genre: "Fantasy",
    author: "Rebecca Yarros",
    yearReleased: new Date(2023, 4, 5),
    price : 34.99
  },
  {
    title: "The Hunger Games",
    genre: "Science Fiction",
    author: "Suzanne Collins",
    yearReleased: new Date(2008, 9, 14),
    price: 19.99
  },
  {
    title: "Divergent",
    genre: "Science Fiction",
    author: "Veronica Roth",
    yearReleased: new Date(2011, 4, 26),
    price: 18.99
  }
];
