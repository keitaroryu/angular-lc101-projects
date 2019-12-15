import { Component, OnInit } from '@angular/core';

@Component({
<<<<<<< HEAD
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks = ['http://www.monsterhunterworld.com/us/', 'https://www.monsterhunter.com/world-iceborne/us/topics/boost/'];
  constructor() { }

  ngOnInit() {
  }
=======
   selector: 'fav-links',
   templateUrl: './fav-links.component.html',
   styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
   favLinks = ['https://www.launchcode.org/', 'https://www.webelements.com/'];

   constructor() { }

   ngOnInit() {
   }
>>>>>>> 9fd9381bf8a2523e0db6d36f797a4b9ccc94cf53

}
