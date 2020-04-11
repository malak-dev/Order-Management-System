import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { OrdersComponent } from './orders/orders.component';

import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { Status } from './dashboard/status'


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    DashboardComponent,
    EditOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [Status],
  bootstrap: [AppComponent]
})
export class AppModule { }
