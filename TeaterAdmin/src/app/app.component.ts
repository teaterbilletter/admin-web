import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'TeaterAdmin';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA7DvfaIHOvR0LDQ1h2jkMca4MYcWGv0TM',
      authDomain: 'mitprojekt-a2f89.firebaseapp.com',
    });
  }
}
