import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the AllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all',
  templateUrl: 'all.html',
})
export class AllPage implements OnInit{
  keys;
  name: string[];
  details: any;
  suitesArr = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit(){
    firebase.database().ref('hotel-suites').on('value', (data: any) => {
      this.keys = Object.keys(data.val());
      this.details = data.val();
      for (let i = 0; i < this.keys.length; i++) {
        var k = this.keys[i];
        let suites = {
          name: this.details[k].name,
          description: this.details[k].description,
          price: this.details[k].price,
          rating: this.details[k].rating,
          url: this.details[k].url,
          occupants: this.details[k].occupants
        }
        this.suitesArr.push(suites);
      }
    })
  }

  displaypage(page:string, i){
    console.log(i);
    this.navCtrl.push(page);
  }
}
