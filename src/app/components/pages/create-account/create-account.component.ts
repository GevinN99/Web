import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import CustomerDTO from "../../../dtos/CustomerDTO";
import {CustomerService} from "../../../services/customerServices/customer.service";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  customerForm:FormGroup= new FormGroup({
    customerName:new FormControl(null,[
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3)
    ]),
    customerEmail:new FormControl(null,[
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(5)
    ]),
    customerMobileNumber:new FormControl(null,[
      Validators.required,
      Validators.maxLength(12),
      Validators.minLength(10)
    ]),
    customerAddress:new FormControl(null,[
      Validators.required,
      Validators.maxLength(100),
      Validators.minLength(10)
    ]),
    customerPassword:new FormControl(null,[
      Validators.required,
      Validators.maxLength(25),
      Validators.minLength(6)
    ])
  });

  constructor(private  customerService: CustomerService) { }

  customerArray: CustomerDTO[] =[];

  ngOnInit(): void {
  }

  saveCustomer() {
    const customer= new CustomerDTO(
      this.customerForm.get('customerName')?.value,
      this.customerForm.get('customerEmail')?.value,
      Number(this.customerForm.get('customerMobileNumber')?.value),
      this.customerForm.get('customerAddress')?.value,
      this.customerForm.get('customerPassword')?.value
    );

this.customerService.saveCustomer(customer).subscribe(resp => {
  console.log(resp);
}, error => {
  console.log(error);
});



  }
}
