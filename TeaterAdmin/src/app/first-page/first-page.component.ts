import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  dates = [{dateForShow: 'a date'}];

  public showAvailableTimes = false;

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

  ngOnInit(): void {
  }

}
