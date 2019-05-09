import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdministratorService, Theater} from '../../..';

@Component({
  selector: 'app-update-theater',
  templateUrl: './update-theater.component.html',
  styleUrls: ['./update-theater.component.css']
})
export class UpdateTheaterComponent implements OnInit {
  updateTheaterForm: FormGroup;
  private oldTheaterName: string;

  constructor(private adminService: AdministratorService) {}

  ngOnInit() {
    this.updateTheaterForm = new FormGroup({
      theater: new FormGroup({
        theaterName: new FormControl(null, Validators.required),
        theaterStreet: new FormControl(null, Validators.required ),
        theaterZip: new FormControl(null, Validators.required)
      }),
      oldTheaterName: new FormControl(null, Validators.required)
    });

    this.updateTheaterForm.setValue({
      theater: {
        theaterName: 'Osteladen',
        theaterStreet: 'Lyngeren',
        theaterZip: '2830'
      },
      oldTheaterName: 'Mit hjemmelavede teater2'
    });
  }

  onSubmit() {
    const theater: Theater = {
      name: this.updateTheaterForm.get('theater.theaterName').value.toString(),
      address: (this.updateTheaterForm.get('theater.theaterStreet').value.toString() + ', '
        + this.updateTheaterForm.get('theater.theaterZip').value.toString()),
      active: true
    };
    this.oldTheaterName = this.updateTheaterForm.get('oldTheaterName').value.toString();

    this.adminService.updateTheater(this.oldTheaterName, theater).subscribe( result => console.log(result));

    this.updateTheaterForm.reset();
  }
}
