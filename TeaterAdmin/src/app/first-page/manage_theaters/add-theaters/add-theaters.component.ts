import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AdministratorService, Theater} from '../../..';

@Component({
  selector: 'app-add-theaters',
  templateUrl: './add-theaters.component.html',
  styleUrls: ['./add-theaters.component.css']
})
export class AddTheatersComponent implements OnInit {
  addTheaterForm: FormGroup;

  constructor(private adminService: AdministratorService) {}

  ngOnInit() {
    this.addTheaterForm = new FormGroup({
      theater: new FormGroup({
        theaterName: new FormControl(null, Validators.required),
        theaterStreet: new FormControl(null, Validators.required ),
        theaterZip: new FormControl(null, Validators.required)
      })
    });

    this.addTheaterForm.setValue({
      theater: {
        theaterName: 'Mit hjemmelavede teater',
        theaterStreet: 'Lyngeren',
        theaterZip: '2830'
      }
    });
  }

  onSubmit() {
    const theater: Theater = {
      name: this.addTheaterForm.get('theater.theaterName').value.toString(),
      address: (this.addTheaterForm.get('theater.theaterStreet').value.toString() + ', '
        + this.addTheaterForm.get('theater.theaterZip').value.toString()),
      active: true
    };
    this.adminService.createTheater(theater).subscribe( result => console.log(result));

    this.addTheaterForm.reset();
  }

}
