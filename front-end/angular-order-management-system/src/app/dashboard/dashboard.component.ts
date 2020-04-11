import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Status } from './status'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  $order;
  constructor(private status: Status) { }


  ngOnInit(): void {

  }

  fetchStatusWorking() {
    this.$order = this.status.fetchStatusWorking().subscribe(res => this.$order = res);

  }
  // fetchStatusNew() {
  //   this.$order = this.status.fetchStatusNew().subscribe(res => this.$order = res);

  // }
}
