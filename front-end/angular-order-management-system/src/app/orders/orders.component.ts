import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

import { Order } from '../order'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;


  // order: Order = {
  //   id: 1,
  //   date: '2020-03-01',
  //   side: 'BUY',
  //   symbol: 'AAPL',
  //   quantity: 10,
  //   amount: 1000,
  //   status: 'NEW'

  // }
  columnDefs = [
    { headerName: 'Order#', field: 'OrderId', sortable: true, checkboxSelection: true },
    { headerName: 'Date', field: 'Date' },
    { headerName: 'Side', field: 'Side' },
    { headerName: 'Symbol', field: 'Symbol' },
    { headerName: 'Quantity', field: 'Quantity' },
    { headerName: 'Amount', field: 'Amount' },
    { headerName: 'Status', field: 'Status' },
  ];

  rowData: any;

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.rowData = this.http.get('https://next.json-generator.com/api/json/get/4kykG98vO');

  }
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    console.log(selectedNodes[0], "lllll")
    const selectedData = selectedNodes.map(node => {
      node.data,
        console.log(node.data.OrderId)
    });
    console.log(selectedNodes[0].data.OrderId, "kkkkkkkkk")
  }
}
