import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string = 'SplashPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
      apiKey: "AIzaSyCxoK0TjMSiIf-TmCn7cXUvnNn72VD7Ejw",
      authDomain: "hotel-booking-dfa63.firebaseapp.com",
      databaseURL: "https://hotel-booking-dfa63.firebaseio.com",
      projectId: "hotel-booking-dfa63",
      storageBucket: "hotel-booking-dfa63.appspot.com",
      messagingSenderId: "573074981582"
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

