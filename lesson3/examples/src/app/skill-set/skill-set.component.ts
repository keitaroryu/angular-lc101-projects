import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'skill-set',
   templateUrl: './skill-set.component.html',
   styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit {
   listHeading: string = 'Some Coding Skills I Know';
   skills: string[] = ['Loops', 'Conditionals', 'Functions', 'Classes', 'Modules', 'Git', 'HTML/CSS'];
<<<<<<< HEAD
   alternateColor: string = 'black';
   bulletType: string = 'A';
=======
   bulletType: string = 'A';
   alternateColor: string = 'black';
>>>>>>> 9fd9381bf8a2523e0db6d36f797a4b9ccc94cf53
   changeColor: boolean = true;

   constructor() { }

   ngOnInit() { }

}
