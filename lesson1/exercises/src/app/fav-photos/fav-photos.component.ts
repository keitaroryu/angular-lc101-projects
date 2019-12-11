import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Memes';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://i.ytimg.com/vi/jpsGLsaZKS0/maxresdefault.jpg';
  image3 = 'https://image.insider.com/5d02563ddaa4821bf4575092?width=1100&format=jpeg&auto=webp';

  constructor() { }

  ngOnInit() {
  }

}