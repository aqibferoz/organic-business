import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { AnalyticsPageModule } from '../pages/analytics/analytics.module';
import { VenuePageModule } from '../pages/venue/venue.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environment';

import { ApiProvider } from '../providers/api/api';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    VenuePageModule,
    AnalyticsPageModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiProvider,
    AuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
