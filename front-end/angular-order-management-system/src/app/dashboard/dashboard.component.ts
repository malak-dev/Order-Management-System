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
  $working;
  $new
  $allocated
  $filled
  constructor(private status: Status) { }

  ngOnInit(): void {
    this.$working = this.status.fetchStatusWorking().subscribe(res => this.$working = res);
    this.$new = this.status.fetchStatusNew().subscribe(res => this.$new = res);
    this.$allocated = this.status.fetchStatusAllocated().subscribe(res => this.$allocated = res);
    this.$filled = this.status.fetchStatusAllocated().subscribe(res => this.$filled = res);
  }

  // fetchStatusWorking() {
  //   this.$working = this.status.fetchStatusWorking().subscribe(res => this.$working = res);

  // }

  // fetchStatusNew() {
  //   this.$new = this.status.fetchStatusNew().subscribe(res => this.$new = res);

  // }
  // fetchStatusAllocated() {
  //   return this.$allocated = this.status.fetchStatusAllocated().subscribe(res => this.$allocated = res);

  // }
  // fetchStatusFilled() {
  //   return this.$filled = this.status.fetchStatusAllocated().subscribe(res => this.$filled = res);

  // }

}
