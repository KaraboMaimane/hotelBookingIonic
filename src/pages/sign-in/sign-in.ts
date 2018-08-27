import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';
import firebase from 'firebase';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;//allowing us to set pages as a root

  constructor(private db: DatabaseProvider,private loading: LoadingController, private alert: AlertController, public navCtrl: NavController){
    //running the firebase db

    //checks the user state
    /*
    Tip: what you can do is that you can make use of
    ng if to allow elements to be showed or viewed in the page
    */
  }

  onsignin(form: NgForm){
    const loading = this.loading.create({
      content: 'Signing you in..'
    });
    loading.present();
    this.db.signin(form.value.email, form.value.password)
    .then(data => {
      loading.dismiss();
      const alert = this.alert.create({
        title: 'Sign in success',
        message: 'You may now proceed',
        buttons: [
          {
            text:'Ok',
            handler: () => {
              this.navCtrl.push('CategoriesPage');
            }
        
        }]
      });
      alert.present();
    })
    .catch(error => {
      loading.dismiss();
      const alert = this.alert.create({
        title: 'Sign in failed',
        message: error,
        buttons: ['Ok']
      });
      alert.present();
    })
  }

  ionPageWillLeave(){
    const alert = this.alert.create({
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
