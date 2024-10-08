import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {BookListitemComponent} from "./app/book-listitem/book-listitem.component";
import {BookListComponent} from "./app/book-list/book-list.component";


const routes: Routes = [
  {path:'', redirectTo: '/students', pathMatch: 'full'}, //default route
  { path: 'book', component: BookListComponent },
  { path: 'books/:id', component: BookListitemComponent },
  // {path:'modify-student', component: ModifyBookComponent},
  // {path: '**', component:PageNotFoundComponent}//Wildcard route for a 404 page
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
