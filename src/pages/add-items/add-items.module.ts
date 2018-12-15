import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddItemsPage } from './add-items';

@NgModule({
  declarations: [
    AddItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddItemsPage),
  ],
})
export class AddItemsPageModule {}
