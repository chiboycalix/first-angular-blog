import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
user: Observable <firebase.User>;
   authState: any = null;

  constructor(public afAuth: AngularFireAuth ) {
  this.user = this.afAuth.authState;
  this.afAuth.authState.subscribe(data => this.authState = data);
  }

  get authenticated(): boolean{
    return this.authState !== null;
  }
  get currentUserId(): string{
    return this.authenticated ? this.authState.uid : null;
  }



  onSignin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  this.afAuth.auth.signInWithPopup(provider);
  }
  onLogout() {
    this.afAuth.auth.signOut();
  }

}
