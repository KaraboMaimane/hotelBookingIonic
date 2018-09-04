import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the BookingsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookings-list',
  templateUrl: 'bookings-list.html',
})
export class BookingsListPage implements OnInit {
  keys: string[];
  details: any;
  stuff: any[];
  bookingsList = [];
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit(){
    let ref = firebase.database().ref('hotel-bookings');
    ref.once("value").then((snapshot) => {
      //getting the user keys
      let users = snapshot.val();
      users = Object.keys(users);

      for(let i = 0; i < users.length; i++){
        let bookingValues = snapshot.child(users[i]).val();
        let bookingKeys = Object.keys(bookingValues);
        console.log(bookingKeys.length);
        for(let j = 0; j < bookingKeys.length; j++){
          let booking = snapshot.child(users[i]+'/'+bookingKeys[j]).val();
          let bookingObj = {
            userid: users[i],
            id: bookingKeys[i],
            suite: booking.suite,
            name: booking.name,
            surname: booking.surname,
            idno: booking.idno,
            datefrom: booking.datefrom,
            dateto: booking.dateto,
            occupants: booking.occupants,
            image: booking.image
          }
          
          this.bookingsList.push(bookingObj);
          console.log(this.bookingsList);
        }
        
        

        
        
      }
      //getting the booking keys
      
      

      //getting the individual booking
      // let booking = snapshot.child(users[0]+'/'+bookingKeys[0]).val();

      // //getting booking details
      // let bookingName = snapshot.child(users[0]+'/'+bookingKeys[0]+'/name').val();
      // let bookingSurname = snapshot.child(users[0]+'/'+bookingKeys[0]+'/surname').val();
      // let bookingIdNo = snapshot.child(users[0]+'/'+bookingKeys[0]+'/idno').val();
      // let bookingFrom = snapshot.child(users[0]+'/'+bookingKeys[0]+'/datefrom');
    });
    
  }
}
