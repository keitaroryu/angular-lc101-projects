import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
<<<<<<< HEAD
   chores = [
      {title: "Yesturday's Chores", tasks: ['Empty Dishwasher', ' Start LaunchCode prep work', 'Buy groceries']},
      {title: "Today's Chores", tasks: ['Load dishwasher', 'Finish LaunchCode prep work', 'Buy the groceries you forgot']},
      {title: "Tomorrow's Chores", tasks: ['Empty dishwasher AGAIN', 'Play with LaunchCode practice code', 'Groceries Again']}
   ]
   //chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
   //todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores"];
=======
   //chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
   //todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores"];

   chores = [
      {title: "Yesterday's Chores", tasks: ['Empty dishwasher', 'Start LaunchCode prep work', 'Buy groceries']},
      {title: "Today's Chores", tasks: ['Load dishwasher', 'Finish LaunchCode prep work', 'Buy the groceries you forgot']},
      {title: "Tomorrow's Chores", tasks: ['Empty dishwasher AGAIN', 'Play with LaunchCode practice code', 'Groceries AGAIN']},
   ]
>>>>>>> 9fd9381bf8a2523e0db6d36f797a4b9ccc94cf53

   constructor() { }

   ngOnInit() {
   }

}
