import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VenuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-venue',
  templateUrl: 'venue.html',
})
export class VenuePage {
  data = {
    "items": 
    {
      "id": 1,
      "avatar": "assets/images/avatar/16.jpg",
      "image": "assets/images/avatar/15.jpg",
      "title": "Vengeful Spirit IPA",
      "subtitle": "Stone Brewing",
      "button": "Categories",
      "style": "IPA - American",
      

    },
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VenuePage');
  }

}
