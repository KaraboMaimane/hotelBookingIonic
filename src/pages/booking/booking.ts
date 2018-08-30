import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage implements OnInit{
  color: any;
  suite: any;
  user: any;
  time = Date.now();
  date = new Date(this.time);
  month;
  day;
  year;
  formattedDate: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DatabaseProvider) {

    
  }

  formatDate(){
    if(this.date.getDay() < 10){
      this.day = "0" + this.date.getDay();
    }else{
      this.day = this.date.getDay();
    }
    
    if(this.date.getMonth() < 10){
      this.month = "0" + this.date.getMonth();
    }else{
      this.month = this.date.getMonth();
    }
    
    this.year = this.date.getFullYear();

    return [this.year, this.month, this.day].join('-');
  }

  ngOnInit(){
    this.color = this.navParams.get('color');
    this.suite = this.navParams.get('suite');
    this.user = this.db.getUser().email;

    this.formattedDate = this.formatDate();
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

}
