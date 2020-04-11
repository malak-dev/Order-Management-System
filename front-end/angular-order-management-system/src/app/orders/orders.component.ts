import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

import { Order } from '../order'
import { Identifiers } from '@angular/compiler';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

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
  $gridApi;
  $gridColumnApi;

  $columnDefs;
  $defaultColDef;
  $rowData: any;

  constructor(private http: HttpClient) {
    this.$columnDefs = [
      {
        field: 'id',
        minWidth: 160,
      },
      { field: 'Date' },
      {
        field: 'Side',
        minWidth: 140,
      },
      { field: 'Symbol' },
      {
        field: 'Quantity',
        minWidth: 140,
      },
      {
        field: 'Amount',
        minWidth: 160,
      },
      { field: 'Status' },
    ];
    this.$defaultColDef = {
      flex: 1,
      minWidth: 100,
      editable: true,
    };
  }


  ngOnInit() {
    this.http
      .get(
        'http://localhost:3000/orders'
      )
      .subscribe(data => {
        this.$rowData = data;
      });
  }

  onGridReady(params) {
    this.$gridApi = params.api;
    this.$gridColumnApi = params.columnApi;
  }

  onCellValueChange(params: any) {
    this.http
      .patch(
        `http://localhost:3000/orders/${params.data.id}`, params.data,
      ).subscribe(
        res => {
          console.log('successfully updated');
        },
        error => {
          console.log('failed updating', error);
        }
      );
  }


}



