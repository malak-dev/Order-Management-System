import { Component, OnInit } from '@angular/core';
import { Order } from '../order'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  order: Order = {
    id: 1,
    date: '2020-03-01',
    side: 'BUY',
    symbol: 'AAPL',
    quantity: 10,
    amount: 1000,
    status: 'NEW'

  }

  constructor() { }


  ngOnInit(): void {
  }

}
