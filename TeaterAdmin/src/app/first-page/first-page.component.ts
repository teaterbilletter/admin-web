import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {UserService} from '../user.service';
import {HttpClient} from '@angular/common/http';
import {Show} from '../model/show';
import {ShowService} from '../services/show.service';
import {Booking} from '..';
import {RestapiService} from '../services/restapi.service';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  dates = [{dateForShow: 'a date'}];

  public shows: Array<Show>;
  public diplayShows: Show;

  public showAvailableTimes = false;
  private AllShowsUrl = 'https://ticket.northeurope.cloudapp.azure.com:5443/AllShows';

  constructor(private authService: AuthService, private userService: UserService, private showService: ShowService) {


  }


  onDropDownElementPressed() {
    console.log('pressed');
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



    this.showService.getAllShows().subscribe((shows: Show[]) => {
      this.shows = shows;
      console.log(shows);

    });

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
