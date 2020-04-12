import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { NewOrderComponent } from './new-order/new-order.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'orders', component: OrdersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new', component: NewOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
