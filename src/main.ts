import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {BookListitemComponent} from "./app/book-listitem/book-listitem.component";
import {BookListComponent} from "./app/book-list/book-list.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {provideHttpClient} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/services/in-memory-data.service";
import {importProvidersFrom} from "@angular/core";


const routes: Routes = [
  {path:'', redirectTo: '/book', pathMatch: 'full'}, //default route
  { path: 'book', component: BookListComponent },
  { path: 'books/:id', component: BookListitemComponent },
  {path:'modify-book', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}//Wildcard route for a 404 page
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient(),
  importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 }))]
}).catch((err) => console.log(err));
