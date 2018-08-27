import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
  
  onsend(form: NgForm){
    this.db.addHotel(form.value.name, form.value.description, form.value.url, form.value.price, form.value.occupants, form.value.rating);
  }

}
