import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient, private api: AngularFirestore) {
    console.log('Hello ApiProvider Provider');
  }

  addItem(item){
    return this.api.collection('items').add(item);
  }

  getItems(){
    return this.api.collection('items').snapshotChanges();
  }

  getItem(id) {
    return this.api.collection('items').doc(id).valueChanges();
  }

  updateItem(id, data) {
    return this.api.collection('items').doc(id).update(data);
  }

  deleteItem(id) {
    return this.api.collection('items').doc(id).delete();
  }

}
