import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  $newItem = {

  }
  AddItem() {
    console.log(this.$newItem)
    this.http
      .post(
        `http://localhost:3000/orders`, this.$newItem,
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



