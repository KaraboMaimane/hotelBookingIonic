import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: DatabaseProvider, private loading: LoadingController, private alert: AlertController) {
  }

  signup(form: NgForm){
    const loading = this.loading.create({
      content: 'Signing you up..'
    });
    loading.present();
    this.database.signup(form.value.email, form.value.password)
    .then(data => {
      loading.dismiss();
      this.navCtrl.push('SignInPage');
    })
    .catch(error => 
      {
        loading.dismiss();
        const alert = this.alert.create({
          title: 'Error!!!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }

  nextPage(page: string){
    this.navCtrl.push(page);
  }

}
