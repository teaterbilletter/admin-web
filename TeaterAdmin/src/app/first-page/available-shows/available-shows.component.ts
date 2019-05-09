import {Component, OnChanges, OnInit} from '@angular/core';
import {Show, ShowService} from '../..';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-available-shows',
  templateUrl: './available-shows.component.html',
  styleUrls: ['./available-shows.component.css']
})
export class AvailableShowsComponent implements OnInit {

  public id: number;
  public show: Show = {};
  public dates: Array<Date> = [];
  private tempdate: Date;



  constructor(private showService: ShowService) {
  }

  ngOnInit() {
    this.id = this.showService.getShowIdFromStorage();
    this.showService.getShow(this.id).subscribe(s => {
      this.show = s;
      this.show.dates.forEach((d: Date) => {
        this.tempdate = new Date(d.toString());
        this.dates.push(this.tempdate);
      });
    });
  }

  displayShows() {

  }


}