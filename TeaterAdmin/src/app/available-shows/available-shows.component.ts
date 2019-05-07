import { Component, OnInit } from '@angular/core';
import {Show} from '..';

@Component({
  selector: 'app-available-shows',
  templateUrl: './available-shows.component.html',
  styleUrls: ['./available-shows.component.css']
})
export class AvailableShowsComponent implements OnInit {

  public timeSlots: number[];

  constructor() {
    this.timeSlots = [1, 2, 3, 4, 5, 6, 7, 8];
  }

  ngOnInit() {

  }


}
