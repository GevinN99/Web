import { Component, OnInit } from '@angular/core';
//------
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import CustomerDTO from "../../../dtos/CustomerDTO";
import {CustomerService} from "../../../services/customerServices/customer.service";
// import any = jasmine.any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  //------------------
  constructor(private customerService: CustomerService) {
  }

  loginForm:FormGroup= new FormGroup({
    customerEmail:new FormControl(null,[
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(5)
    ]),
    customerPassword:new FormControl(null,[
      Validators.required,
      Validators.maxLength(25),
      Validators.minLength(6)
    ])
  });



  // constructor() { }

  //-------------------
  customerArray: CustomerDTO[] =[];
  loginPage: any = null;

  ngOnInit(): void {
  }

//  ---------------
  email = '';
  password = '';

  getCustomer(email: string, password: string){

    this.customerService.getCustomer(email, password).subscribe(resp => {
      this.loginPage= resp.data;
    }, error => {
      console.log(error);
    });
  }


}
