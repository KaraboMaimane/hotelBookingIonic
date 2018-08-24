import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class DatabaseProvider {
  constructor() {
  }

  signup(email: string, password: string){
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  signin(email: string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

}
