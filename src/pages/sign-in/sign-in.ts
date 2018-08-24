import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';

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
  constructor(private db: DatabaseProvider,private loading: LoadingController, private alert: AlertController){

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
        buttons: ['Ok']
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
}
