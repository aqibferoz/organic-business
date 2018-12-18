import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController, ActionSheetController } from 'ionic-angular';

/*
  Generated class for the HelperProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelperProvider {

  loader: any;

  constructor(private alertCtrl: AlertController, private loadingCtrl: LoadingController,
    private toastCtrl: ToastController, private actionSheetController: ActionSheetController) {
    console.log('Hello HelperProvider Provider');
  }

  load() {
    this.loader = this.loadingCtrl.create({
      content: 'Loading'
    });
    this.loader.present();
  }

  dismiss() {
    if (this.loader) { this.loader.dismiss(); this.loader = null; }
  }

  presentConfirm(title, message, successButton, cancelButton, onsuccess, oncancel) {
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: cancelButton,
          role: 'cancel',
          handler: oncancel
        },
        {
          text: successButton,
          handler: onsuccess
        }
      ]
    });
    alert.present();
  }

  presentActionSheet(title, option1, option2, f1, f2){
    let actionSheet = this.actionSheetController.create({
      title: title,
      buttons: [
        {
          text: option1,
          role: 'destructive',
          handler: f1
        },
        {
          text: option2,
          role: 'destructive',
          handler: f2
        },
      ]
    }).present();
  }

  presentPrompt(title, inputs, buttons) {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: inputs
      , buttons: buttons
    });
    alert.present();
  }

  presentToast(msg, dur, pos) {
    let t = this.toastCtrl.create({
      message: msg,
      duration: dur || 3000,
      position: pos || 'bottom'
    });

    t.onDidDismiss(() => {

    });

    t.present();
  }

  presentBottomToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2300,
      position: 'bottom'
    }).present();
  }

}