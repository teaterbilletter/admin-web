import {Component, OnInit, ViewChild} from '@angular/core';
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

  ngOnInit() {
  }

  getUserName() {
    return this.userService.getUserName();
  }

}
