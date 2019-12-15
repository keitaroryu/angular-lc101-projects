import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
<<<<<<< HEAD
import { ChoresListComponent } from './chores-list/chores-list.component';
import { FavPhotosComponent } from './fav-photos/fav-photos.component';
=======
import { FavPhotosComponent } from './fav-photos/fav-photos.component';
import { ChoresListComponent } from './chores-list/chores-list.component';
>>>>>>> 9fd9381bf8a2523e0db6d36f797a4b9ccc94cf53
import { PageTitleComponent } from './page-title/page-title.component';
import { FavLinksComponent } from './fav-links/fav-links.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
<<<<<<< HEAD
    ChoresListComponent,
    FavPhotosComponent,
=======
    FavPhotosComponent,
    ChoresListComponent,
>>>>>>> 9fd9381bf8a2523e0db6d36f797a4b9ccc94cf53
    PageTitleComponent,
    FavLinksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
