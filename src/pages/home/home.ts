import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemsPage } from '../items/items';

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
        
    },
    {
        "id": 2,
        "avatar": "assets/images/avatar/17.jpg",
        "title": "Logan Rogers",
        "subtitle": "@logan",
        
    },
    {
        "id": 3,
        "avatar": "assets/images/avatar/18.jpg",
        "title": "Gary Russell",
        "subtitle": "@gary",
        
    },
    {
        "id": 4,
        "avatar": "assets/images/avatar/19.jpg",
        "title": "Amy Lee",
        "subtitle": "@amy",
        "button": "Follow"
    },    
  ]
};
    itemsPage(){
        this.navCtrl.push(ItemsPage);
    }

}
