import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.scss']
})
export class CustomerOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//  -------------------------------
  images = [1, 2, 3, 4, 5, 6].map((n) =>  `../../../assets/customer-order/co${n}.jpg`);
}
