import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdministratorService, Hall} from '..';

@Component({
  selector: 'app-add-hall',
  templateUrl: './add-hall.component.html',
  styleUrls: ['./add-hall.component.css']
})
export class AddHallComponent implements OnInit {
  addHallForm: FormGroup;

  constructor(private adminService: AdministratorService) {}

  ngOnInit() {
    this.addHallForm = new FormGroup({
      hall: new FormGroup({
        hallNumber: new FormControl(null, Validators.required),
        theaterName: new FormControl(null, Validators.required ),
        seatCount: new FormControl(null, Validators.required),
        rowCount: new FormControl(null, Validators.required)
      })
    });

    this.addHallForm.setValue({
      hall: {
        hallNumber: 7,
        theaterName: 'Mit hjemmelavede teater2',
        seatCount: 10,
        rowCount: 10
      }
    });
  }

  onSubmit() {
    const hall: Hall = {};
    hall.hallNum = +this.addHallForm.get('hall.hallNumber').value;
    hall.seats = +this.addHallForm.get('hall.hallNumber').value;
    hall.rows = +this.addHallForm.get('hall.hallNumber').value;
    hall.theater = { name: this.addHallForm.get('hall.hallNumber').value.toString() };

    this.adminService.createHall(hall).subscribe( result => console.log(result));

    this.addHallForm.reset();
  }

  /*const hall: Hall = {
      hallNum: +this.addHallForm.get('hall.hallNumber').value.toString(),
      theater: {
        name: this.addHallForm.get('hall.theaterName').value.toString(),
        address: '',
        active: true
      },
      rows: +this.addHallForm.get('hall.rowCount').value.toString(),
      seats: +this.addHallForm.get('hall.seatCount').value.toString()
    };
    this.adminService.createHall(hall).subscribe( result => console.log(result));
 */

}
