import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemsPage } from '../items/items';
import { AddItemsPage } from '../add-items/add-items';
import { ApiProvider } from '../../providers/api/api';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { map } from 'rxjs/operators';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
    items: any; 
   
  constructor(public navCtrl: NavController, private api: ApiProvider, private auth: AuthProvider) {

    this.api.getItems(this.auth.getToken()).pipe(map(
        list => {
            return list.map(
                items => {
                    const data = items.payload.doc.data();
                    const id = items.payload.doc.id;
                    return {id, ...data}
                }
            )
        }
    )).subscribe(resp => {
        this.items = resp;
    });

  }
 
    itemsPage(){
        this.navCtrl.push(ItemsPage);
    }

    addItems(){
        this.navCtrl.push(AddItemsPage)
    }
}
