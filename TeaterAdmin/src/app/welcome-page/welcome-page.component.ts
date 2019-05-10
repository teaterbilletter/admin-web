import { Component, OnInit } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {Show} from "..";
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  dates = [{dateForShow: 'a date'}];

  public showAvailableTimes = false;

  constructor() { }

  ngOnInit() {
  }



  onDropDownElementPressed() {
    console.log("pressed");
    this.showAvailableTimes = true;
  }

  onDateSelected(dateSelect: {dates: string}) {
    this.dates.push({
      dateForShow: dateSelect.dates

    });
    console.log(dateSelect);
  }
}
