import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
<<<<<<< HEAD
   chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
   finishedChores = ['Empty dishwasher'];
=======
   chores = ['Empty dishwasher'];
   finishedChores = ['Complete LaunchCode prep work', 'Buy groceries', 'Clean kitchen', 'Call mom'];
>>>>>>> 9fd9381bf8a2523e0db6d36f797a4b9ccc94cf53

   trophyImage = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';

   constructor() { }

   ngOnInit() {
   }

}
