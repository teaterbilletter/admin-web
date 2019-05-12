import {Component, OnChanges, OnInit} from '@angular/core';
import {AdministratorService, Show, ShowService} from '../../..';
import {HttpClient} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-available-shows',
  templateUrl: './available-shows.component.html',
  styleUrls: ['./available-shows.component.css']
})
export class AvailableShowsComponent implements OnInit {
  public shows: Show[];
  public show: Show = {};
  public dates: Array<Date> = [];
  private tempdates: Array<Date> = [];
  private tempdate: Date;
  private showAvailableTimes: any;


  constructor(private showService: ShowService, private adminService: AdministratorService, private datepipe: DatePipe) {
    this.showService.getAllShows().subscribe((shows: Show[]) => {
    this.shows = shows;
  });
  }

  ngOnInit() {
  }

  onDropDownElementPressed(id: number) {
    this.dates = [];
    this.showService.getShow(id).subscribe(s => {
      this.show = s;
      this.show.dates.forEach((d: Date) => {
        this.tempdate = new Date(d.toString());
        this.dates.push(this.tempdate);
      });
    });
    console.log('pressed ' + id);
    this.showAvailableTimes = true;
  }

  getDropDownElementPressed() {
    return this.showAvailableTimes;
  }

  CancelDate(showDate: Date) {
    for (const d of this.dates) {
      if ( !(d.getMonth() === showDate.getMonth() && d.getDate() === showDate.getDate() && d.getHours() === showDate.getHours()) ) {
        this.tempdates.push(d);
      }
    }
    this.dates = this.tempdates;
    this.adminService.deleteShowDates(this.show.id, showDate);
  }


}
