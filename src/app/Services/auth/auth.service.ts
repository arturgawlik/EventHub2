import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(true);

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(public afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe((auth) => {
      if (auth == null) {
        this.loggedIn.next(false);
      } else {
        this.loggedIn.next(true);
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.loggedIn.next(true);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.loggedIn.next(false);
  }

  // doFacebookLogin() {
  //   return new Promise<any>((resolve, reject) => {
  //     // tslint:disable-next-line:prefer-const
  //     let provider = new firebase.auth.FacebookAuthProvider();
  //     this.af.auth
  //       .signInWithPopup(provider)
  //       .then(res => {
  //         resolve(res);
  //       }, err => {
  //         console.log(err);
  //         reject(err);
  //       });
  //   });
  // }


  // doGoogleLogin() {
  //   return new Promise<any>((resolve, reject) => {
  //     // tslint:disable-next-line:prefer-const
  //     let provider = new firebase.auth.GoogleAuthProvider();
  //     provider.addScope('profile');
  //     provider.addScope('email');
  //     this.af.auth
  //       .signInWithPopup(provider)
  //       .then(res => {
  //         resolve(res);
  //       }, err => {
  //         console.log(err);
  //         reject(err);
  //       });
  //   });
  // }

  // doRegister(value) {
  //   return new Promise<any>((resolve, reject) => {
  //     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
  //       .then(res => {
  //         resolve(res);
  //       }, err => reject(err));
  //   });
  // }

  // doLogin(value) {
  //   return new Promise<any>((resolve, reject) => {
  //     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
  //       .then(res => {
  //         resolve(res);
  //       }, err => reject(err));
  //   });
  // }

  // doLogout() {
  //   return new Promise((resolve, reject) => {
  //     if (firebase.auth().currentUser) {
  //       this.af.auth.signOut();
  //       resolve();
  //     } else {
  //       reject();
  //     }
  //   });
  // }
}
