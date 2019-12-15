import { Component, OnInit } from '@angular/core';

@Component({
<<<<<<< HEAD
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  title:string = 'Cats';
  constructor() { }

  ngOnInit() {
  }
=======
   selector: 'page-title',
   templateUrl: './page-title.component.html',
   styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
   title = "Angular Lesson 1 Exercises"

   constructor() { }

   ngOnInit() {
   }
>>>>>>> 9fd9381bf8a2523e0db6d36f797a4b9ccc94cf53

}
