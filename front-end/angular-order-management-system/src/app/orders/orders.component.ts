import { Component, OnInit } from '@angular/core';
import { Order } from '../order'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
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
  columnDefs = [
    { headerName: 'Order#', field: 'Order' },
    { headerName: 'Date', field: 'Date' },
    { headerName: 'Side', field: 'Side' },
    { headerName: 'Symbol', field: 'Symbol' },
    { headerName: 'Quantity', field: 'Quantity' },
    { headerName: 'Amount', field: 'Amount' },
    { headerName: 'status', field: 'status' },
  ];

  rowData = [
    { Order: 1, Date: '2020-01-01', Side: 'BUY', Symbol: 'AAPL', Quantity: 10, Amount: 1000, status: 'NEW' },

  ];

  constructor() { }


  ngOnInit(): void {
  }

}
