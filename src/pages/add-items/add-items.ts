import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the AddItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-items',
  templateUrl: 'add-items.html',
})
export class AddItemsPage {
  
  itemsData={
    title:'',
    description:''
  }

  ref : AngularFireStorageReference;
  task: AngularFireUploadTask;
  image: Observable<any>;
  imageUrl: string;
  uploadState;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afStorage: AngularFireStorage, private api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemsPage');
  }

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.image = this.ref.getDownloadURL();
        this.image.subscribe(
          resp => {
            this.task.then(
              () => {
                this.imageUrl = resp;
              }
            )
          }
        )
      })
    )
      .subscribe();
  }

}
