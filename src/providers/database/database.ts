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
    this.toast.create({
      message: 'You have successfully logged out!',
      duration: 5000
    });
  }
  
  getUser(){
    return firebase.auth().currentUser;
  }

  /*
  getuser().getToken().then((token: string) =>{

  });
  */

  addHotel(name, description, url, price, occupants, rating){
    firebase.database().ref('hotel-bookings').push({
      name: name,
      description: description,
      url: url,
      price: price,
      occupants: occupants,
      rating: rating
    });
  }

  getData(){
    firebase.database().ref('hotel-booking').on('value', (data: any)=>{
      return data;
    })
  }

}
