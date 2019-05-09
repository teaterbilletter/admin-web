import {Component, OnChanges, OnInit} from '@angular/core';
import {AdministratorService, Show, ShowService} from '../../..';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-available-shows',
  templateUrl: './available-shows.component.html',
  styleUrls: ['./available-shows.component.css']
})
export class AvailableShowsComponent implements OnInit {
  public shows: Show[];
  public show: Show = {};
  public dates: Array<Date> = [];
  private tempdate: Date;

  constructor(private showService: ShowService, private adminService: AdministratorService) {
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

  CancelDate() {
    // TODO: delete show when endpoints are updated
    // this.adminService.deleteShowDates();
  }


}
