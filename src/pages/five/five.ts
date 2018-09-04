import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the FivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-five',
  templateUrl: 'five.html',
})
export class FivePage {
  keys: string[];
  details: any;
  suitesArr = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
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

        if (suites.rating == 5) {
          this.suitesArr.push(suites);
        }
      }
    })
  }
}
