import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  Date: Date;
  Side: string;
  Symbol: string;
  Status: string;
  Quantity: number;
  Amount: number;


  AddItem() {
    const orderToPost: Order = {
      Date: this.Date,
      Side: this.Side,
      Symbol: this.Symbol,
      Status: this.Status,
      Quantity: this.Quantity,
      Amount: this.Amount
    };
    const options = { headers: { 'Content-Type': 'application/json' } };
    this.http
      .post(
        `http://localhost:3000/orders`, orderToPost, options
      ).subscribe(
        res => {
          console.log('successfully added');
        },
        error => {
          console.log('failed adding', error);
        }
      );
  }
}





