import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  token;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DatabaseProvider, private alertCtrl: AlertController) {

    
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
    this.token = this.db.getUser().uid;
    this.formattedDate = this.formatDate();
    console.log(this.token);
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    const alert = this.alertCtrl.create({
      title: 'Confirm Booking?',
      subTitle: `
                Are you sure these are the correct details?<br><br>
                <strong>Full Name:</strong> ${form.value.name} ${form.value.surname}<br>
                <strong>IdNo:</strong> ${form.value.idNo}<br>
                <strong>Date From:</strong> ${form.value.datefrom}<br>
                <strong>Date To:</strong> ${form.value.dateto}<br>
                <strong>Guests:</strong> ${form.value.occupants}<br>`,
      buttons: [
        {
          text: 'No',
          handler: () =>{
          }
        },
        {
          text: 'Yes',
          handler: ()=>{
            this.navCtrl.setRoot('CategoriesPage');
            this.db.booking(form.value.name,form.value.surname, form.value.idNo,form.value.datefrom, form.value.dateto, form.value.occupants, this.token, this.suite.name, this.suite.url);
          }
        }
      ]
    });
    alert.present();
  }

}
