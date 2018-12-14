import { Component } from '@angular/core';

import { IonicPage, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public navCtrl: NavController, private auth: AuthProvider) {
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

    if (this.email != '' && this.password != '') {
      
      this.auth.login(this.email, this.password)
        .then(
          () => {
            this.navCtrl.push(TabsPage);
          }
        ) 
        .catch(err => console.log(err.message));
      }
    }

  forgotPass() {

  
  }


}
