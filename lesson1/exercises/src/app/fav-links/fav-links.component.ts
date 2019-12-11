import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks = ['http://www.monsterhunterworld.com/us/', 'https://www.monsterhunter.com/world-iceborne/us/topics/boost/'];
  constructor() { }

  ngOnInit() {
  }

}
