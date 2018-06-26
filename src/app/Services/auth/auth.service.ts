// import { Injectable } from '@angular/core';
// import {AngularFireAuth} from 'angularfire2/auth';
// import { firebase } from '@firebase/app';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(public af: AngularFireAuth) { }

//   doFacebookLogin() {
//     return new Promise<any>((resolve, reject) => {
//       // tslint:disable-next-line:prefer-const
//       let provider = new firebase.auth.FacebookAuthProvider();
//       this.af.auth
//         .signInWithPopup(provider)
//         .then(res => {
//           resolve(res);
//         }, err => {
//           console.log(err);
//           reject(err);
//         });
//     });
//   }


//   doGoogleLogin() {
//     return new Promise<any>((resolve, reject) => {
//       // tslint:disable-next-line:prefer-const
//       let provider = new firebase.auth.GoogleAuthProvider();
//       provider.addScope('profile');
//       provider.addScope('email');
//       this.af.auth
//         .signInWithPopup(provider)
//         .then(res => {
//           resolve(res);
//         }, err => {
//           console.log(err);
//           reject(err);
//         });
//     });
//   }

//   doRegister(value) {
//     return new Promise<any>((resolve, reject) => {
//       firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
//         .then(res => {
//           resolve(res);
//         }, err => reject(err));
//     });
//   }

//   doLogin(value) {
//     return new Promise<any>((resolve, reject) => {
//       firebase.auth().signInWithEmailAndPassword(value.email, value.password)
//         .then(res => {
//           resolve(res);
//         }, err => reject(err));
//     });
//   }

//   doLogout() {
//     return new Promise((resolve, reject) => {
//       if (firebase.auth().currentUser) {
//         this.af.auth.signOut();
//         resolve();
//       } else {
//         reject();
//       }
//     });
//   }
// }
