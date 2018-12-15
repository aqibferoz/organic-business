import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environment';

import { ApiProvider } from '../providers/api/api';
import { AuthProvider } from '../providers/auth/auth';

import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { AddItemsPage } from '../pages/add-items/add-items';
import { VenuePage } from '../pages/venue/venue';
import { LoginPage } from '../pages/login/login';
import { AnalyticsPage } from '../pages/analytics/analytics';
import { ItemsPage } from '../pages/items/items';
import { HelperProvider } from '../providers/helper/helper';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    VenuePage,
    AnalyticsPage,
    ItemsPage,
    AddItemsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    AddItemsPage,
    LoginPage,
    VenuePage,
    AnalyticsPage,
    ItemsPage,
    AddItemsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiProvider,
    AuthProvider,
    Geolocation,
    AndroidPermissions,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HelperProvider
  ]
})
export class AppModule {}
