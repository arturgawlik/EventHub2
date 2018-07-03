import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import firebase from '@firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(true);

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(public afAuth: AngularFireAuth) {
    // tslint:disable-next-line:no-shadowed-variable
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
}

