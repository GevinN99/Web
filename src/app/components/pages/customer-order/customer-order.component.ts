import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import OrderDTO from "../../../dtos/OrderDTO";

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.scss']
})
export class CustomerOrderComponent implements OnInit {

  orderForm:FormGroup= new FormGroup({
    orderColour: new FormControl(null,[
      Validators.required
    ]),
    orderSize: new FormControl(null,[
      Validators.required
    ])
  });

  constructor() { }

  ngOnInit(): void {
  }

  saveOrder(){
    const order= new OrderDTO(
      this.orderForm.get('orderColour')?.value,
      this.orderForm.get('orderSize')?.value
   );
    console.log(order);
  }

//  -------------------------------
  images = [1, 2, 3, 4, 5, 6].map((n) =>  `../../../assets/customer-order/co${n}.jpg`);
}
