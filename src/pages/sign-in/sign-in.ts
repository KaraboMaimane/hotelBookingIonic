import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(private db: DatabaseProvider){

  }
  onsignin(form: NgForm){
    this.db.signin(form.value.email, form.value.password)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    })
  }
}
