import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AdministratorService } from '../../..';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  deleteCustomerForm: FormGroup;
  customerID: string;

  constructor(private adminService: AdministratorService) {}

  ngOnInit() {
    this.deleteCustomerForm = new FormGroup({
      customer: new FormGroup({
        customerID: new FormControl(null, Validators.required),
      })
    });

    this.deleteCustomerForm.setValue({
      customer: {
        customerID: '1'
      }
    });
  }

  onSubmit() {

    this.customerID = this.deleteCustomerForm.get('customer.customerID').value.toString();
    this.adminService.deleteCustomer(this.customerID).subscribe( result => console.log(result));
    this.deleteCustomerForm.reset();
  }

}
