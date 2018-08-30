import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the DisplayAllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display-all',
  templateUrl: 'display-all.html',
})
export class DisplayAllPage implements OnInit {

  suite = {
    rating: '',
    url: ''
  };
  isAuthenticated: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DatabaseProvider, private toast: ToastController) {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.isAuthenticated = true;
      }else{
        this.isAuthenticated = false;
      }
    });
  }

  ngOnInit(){
    this.suite = this.navParams.get('suite');
  }

  nextPage(page: string){
    this.navCtrl.push(page, {color: 'secondary', suite: this.suite});
  }
}
