import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html'
  ,
  styleUrls: ['./edit-order.component.css'],

})

export class EditOrderComponent implements OnInit {


  @Input() message: any;
  title = "hello"

  constructor() { }

  ngOnInit(): void {
  }

}
