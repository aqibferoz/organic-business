import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {
  data = {
    "items": 
    {
      "id": 1,
      "avatar": "assets/images/avatar/16.jpg",
      "title": "Vengeful Spirit IPA",
      "subtitle": "Stone Brewing",
      "button": "Categories"
    },
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
  }

}
