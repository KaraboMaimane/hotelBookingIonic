import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import firebase from 'firebase';
/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  isAuthenticated: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public db: DatabaseProvider, public toast: ToastController) {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.isAuthenticated = true;
        console.log('logged in');
        console.log(this.db.getUser().email);
        const toast = this.toast.create({
          message: `You are logged in as ${this.db.getUser().email}`,
          duration: 5000
        });
        toast.present();
      }else{
        this.isAuthenticated = false;
        console.log('not logged in');
      }
    });
  }

  ionViewDidEnter(){
  }

  nextpage(page: string){
    this.navCtrl.push(page);
  }

}
