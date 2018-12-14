import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthProvider } from '../../providers/auth/auth';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  email: string;
  password: string;
  emailRequired = false;
  passwordRequired = false;

  constructor(public navCtrl: NavController, private auth: AuthProvider, private geolocation: Geolocation) {

    if (this.auth.getToken()) {
      this.navCtrl.push(TabsPage);
    }

    this.geolocation.getCurrentPosition()
    .then((resp) => {
      console.log('Got the location', resp);
    })
    .catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      console.log(data.coords.latitude);
      console.log(data.coords.longitude);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ngOnInit() {
    
  }  


  // login and go to home page
  login() {

    if (this.email === null) {

      this.emailRequired = true;

    } if (this.password === null) {

      this.passwordRequired = true;

    }

    if (this.email != null && this.password != null) {

      this.auth.login(this.email, this.password)
        .then(
          (resp) => {
            this.auth.saveToken(resp.user.uid);
            this.navCtrl.push(TabsPage);
          }
        ) 
        .catch(err => console.log(err.message));
      }
    }

  forgotPass() {

  
  }


}
