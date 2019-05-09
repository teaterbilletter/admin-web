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


  onDropDownElementPressed(id: number) {
    this.showService.setShowIdInStorage(id);
    console.log('pressed ' + id);
    this.showAvailableTimes = true;
  }

  getDropDownElementPressed() {
    return this.showAvailableTimes;
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
