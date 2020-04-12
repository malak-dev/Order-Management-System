import { Component, OnInit } from '@angular/core';
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
}
