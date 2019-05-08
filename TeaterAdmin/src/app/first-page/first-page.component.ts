import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {UserService} from '../user.service';
import {Show} from '..';
import {ShowService} from '..';

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
    });

  }

  getUserName() {
    return this.userService.getUserName();
  }

}
