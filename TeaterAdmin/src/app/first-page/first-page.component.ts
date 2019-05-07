import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  dates = [{dateForShow: 'a date'}];

  public showAvailableTimes = false;

  constructor(private authService: AuthService, private userService: UserService) {

  }


  onDropDownElementPressed() {
    console.log("pressed");
    this.showAvailableTimes = true;
  }

  getDropDownElementPressed() {
    return this.showAvailableTimes;
  }

  onDateSelected(dateSelect: {dates: string}) {
    this.dates.push({
      dateForShow: dateSelect.dates

    });
    console.log(dateSelect);
  }

  ngOnInit() {
    console.log('NICOLAS SIGER MAN IK MÅ SIGE FUCK ' + this.userService.getUserName());
  }

  getUserName() {
    return this.isAuthenticated() ? '' : '' + this.userService.getUserName();
  }

  isAuthenticated() {
    return this.authService.isTokenExpired(this.authService.getToken());
  }

  onLogout() {
    localStorage.clear();
  }

}
