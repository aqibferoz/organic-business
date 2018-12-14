import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnalyticsPage } from './analytics';

@NgModule({
  declarations: [
    AnalyticsPage,
  ],
  imports: [
    IonicPageModule.forChild(AnalyticsPage),
  ],
})
export class AnalyticsPageModule {}
