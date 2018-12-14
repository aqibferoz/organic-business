import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient, private afAuth :AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signup(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  saveToken(uid) {
    localStorage.setItem('uid', uid)
  }

  getToken() {
    return localStorage.getItem('uid');
  }

  logout() {
    localStorage.clear();
  }

}
