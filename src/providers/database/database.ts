import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { ToastController } from 'ionic-angular';

@Injectable()
export class DatabaseProvider {
  constructor(private toast: ToastController) {
  }

  signup(email: string, password: string){
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  signin(email: string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logout(){
    firebase.auth().signOut();
    const toast = this.toast.create({
      message: 'You have successfully logged out!',
      duration: 5000
    });
    toast.present();
  }
  
  getUser(){
    return firebase.auth().currentUser;
  }

  addHotel(name, description, url, price, occupants, rating){
    firebase.database().ref('hotel-suites').push({
      name: name,
      description: description,
      url: url,
      price: price,
      occupants: occupants,
      rating: rating
    });
  }

  booking(name, surname, idNo, datefrom, dateto, occupants, key, suite, image){
    firebase.database().ref('hotel-bookings/' + key).push({
      name: name,
      surname: surname,
      idno: idNo,
      datefrom: datefrom,
      dateto: dateto,
      occupants: occupants,
      suite: suite,
      image: image
    });
  }

  getData(){
    firebase.database().ref('hotel-suites').on('value', (data: any)=>{
      return data;
    });
  }

}
