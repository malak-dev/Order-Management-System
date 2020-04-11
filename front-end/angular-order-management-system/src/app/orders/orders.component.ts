import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

import { Order } from '../order'
import { Identifiers } from '@angular/compiler';

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
    { headerName: 'Order#', field: 'id', sortable: true, checkboxSelection: true },
    { headerName: 'Date', field: 'Date' },
    { headerName: 'Side', field: 'Side' },
    { headerName: 'Symbol', field: 'Symbol' },
    { headerName: 'Quantity', field: 'Quantity' },
    { headerName: 'Amount', field: 'Amount' },
    {
      headerName: 'Status', field: 'Status',
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        cellHeight: 50,
        values: ['Allocated', 'new'],
      },
    },

  ];

  rowData: any;

  //message: any = "getSelectedRows()"


  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.rowData = this.http.get('http://localhost:3000/orders');

  }

  // getSelectedRows() {
  //   const selectedNodes = this.agGrid.api.getSelectedNodes();
  //   const selectedData = selectedNodes[0].data
  //   console.log(selectedData, "selecteddata")
  // }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes()
    const selectedData = selectedNodes.map(function (node) { return node.data })
    const selectedDataStringPresentation = selectedData.map(function (node) { return node.id + ' ' + node.Status }).join(', ')
    console.log("hhhhhhh")
    return selectedDataStringPresentation;
  }
  currentvalue = "getSelectedRows()"
}
