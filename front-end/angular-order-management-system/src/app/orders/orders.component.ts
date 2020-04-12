import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
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

  $gridApi;
  $gridColumnApi;

  $columnDefs;
  $defaultColDef;
  $rowData: any;

  constructor(private http: HttpClient) {
    this.$columnDefs = [
      {
        field: 'id',
        sortable: true
      },
      { field: 'Date' },
      {
        field: 'Side',
      },
      { field: 'Symbol' },
      {
        field: 'Quantity',
      },
      {
        field: 'Amount',
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



