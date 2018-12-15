import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environment';

import { ApiProvider } from '../providers/api/api';
import { AuthProvider } from '../providers/auth/auth';

import { Geolocation } from '@ionic-native/geolocation';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { ItemsPageModule } from '../pages/items/items.module';
import { AddItemsPageModule } from '../pages/add-items/add-items.module';
import { AddItemsPage } from '../pages/add-items/add-items';
import { LoginPage } from '../pages/login/login';
import { VenuePage } from '../pages/venue/venue';
import { AnalyticsPage } from '../pages/analytics/analytics';
import { ItemsPage } from '../pages/items/items';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
<<<<<<< HEAD
    LoginPage
  ],
  imports: [
    BrowserModule,
=======
    LoginPage,
    VenuePage,
    AnalyticsPage,
    ItemsPage,
    AddItemsPage
  ],
  imports: [
    BrowserModule,
    // LoginPageModule,
    // VenuePageModule,
    // AnalyticsPageModule,
    // AddItemsPageModule,
    // ItemsPageModule,
>>>>>>> 944c0acac52004dd8de81af79b7f45f7e914ffbc
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
    TabsPage,
<<<<<<< HEAD
    LoginPage
=======
    AddItemsPage,
    LoginPage,
    VenuePage,
    AnalyticsPage,
    ItemsPage,
    AddItemsPage
>>>>>>> 944c0acac52004dd8de81af79b7f45f7e914ffbc
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiProvider,
    AuthProvider,
    Geolocation,
    AndroidPermissions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
