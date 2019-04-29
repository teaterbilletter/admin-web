import * as firebase from 'firebase';
import {error} from '@angular/compiler/src/util';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';


@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password);
  }
  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/welcome-page']);
          firebase.auth().currentUser.getIdToken()
            .then((token: string) => this.token = token
            );
        }
      )
      .catch(
        errore => console.log(errore)
      );
  }
  getToken() {
    return firebase.auth().currentUser.getIdToken().then(
      (token: string) => this.token = token
    );
    return this.token;
  }
  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  isAuthenticated() {}
}


