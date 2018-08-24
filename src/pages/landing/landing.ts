import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { SplashPage } from '../splash/splash';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  splash = true;
  splashPage = SplashPage;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  ionViewDidLoad(){
    setTimeout( () => this.splash = false, 3000);
  }

  nextPage(page: string){
    this.navCtrl.push(page);
    const alert = this.alertCtrl.create({
      title: 'Hey There!',
      subTitle: 'Take a look at our exclusive tour packages<br> Firstly, select a category that you would like to choose from and get a good deal on our tours',
      buttons: [
        {
          text: 'Ok'
        }
      ]
    })
    alert.present();
  }

}
