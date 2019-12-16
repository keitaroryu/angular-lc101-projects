import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie (newTitle: string) {
      let errorMsg = '';
      if(newTitle.length === 0){
         errorMsg = 'Please enter a movie title.';
      } else if (this.movies.includes(newTitle)){
         errorMsg = `${newTitle} is already in your move list.`;
      } else {
         this.movies.push(newTitle);
      }
      return errorMsg;
   }

   // The following code is one solution to the bonu  s task.
   // Comment out lines 16 - 20, then uncomment lines 25 - 35 to use it.
   /*
   addMovie (newTitle: string) {
      let errorMsg = '';
      if(newTitle === ''){
         errorMsg = 'Please enter a movie title.';
      } else if (this.movies.includes(newTitle)) {
         errorMsg = `${newTitle} is already in your movie list.`;
      } else {
         this.movies.push(newTitle);
      }
      return errorMsg;
   }
   */
}