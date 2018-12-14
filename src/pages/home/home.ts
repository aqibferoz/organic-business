import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
data = {
  
  "items": [
      {
          "id": 1,
          "avatar": "assets/images/avatar/16.jpg",
          "title": "Vengeful Spirit IPA",
          "subtitle": "Stone Brewing",
          "button": "Follow"
      },
      {
          "id": 2,
          "avatar": "assets/images/avatar/17.jpg",
          "title": "Logan Rogers",
          "subtitle": "@logan",
          "button": "Follow"
      },
      {
          "id": 3,
          "avatar": "assets/images/avatar/18.jpg",
          "title": "Gary Russell",
          "subtitle": "@gary",
          "button": "Follow"
      },
      {
          "id": 4,
          "avatar": "assets/images/avatar/19.jpg",
          "title": "Amy Lee",
          "subtitle": "@amy",
          "button": "Follow"
      },
      {
          "id": 5,
          "avatar": "assets/images/avatar/20.jpg",
          "title": "Silvia Salvador",
          "subtitle": "@silvia",
          "button": "Follow"
      },
      {
          "id": 6,
          "avatar": "assets/images/avatar/15.jpg",
          "title": "Alexandra Parker",
          "subtitle": "@alexandra",
          "button": "Follow"
      },
      {
          "id": 7,
          "avatar": "assets/images/avatar/22.jpg",
          "title": "Gabriel Mascareñas",
          "subtitle": "@gabriel",
          "button": "Follow"
      },
      {
          "id": 8,
          "avatar": "assets/images/avatar/14.jpg",
          "title": "Sofia Clarke",
          "subtitle": "@stephen",
          "button": "Follow"
      },
      {
          "id": 9,
          "avatar": "assets/images/avatar/21.jpg",
          "title": "Lisa Green",
          "subtitle": "@lisa",
          "button": "Follow"
      },
      {
          "id": 10,
          "avatar": "assets/images/avatar/23.jpg",
          "title": "Danijel Bilic",
          "subtitle": "@danijel",
          "button": "Follow"
      }
  ]
};
}
