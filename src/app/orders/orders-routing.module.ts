import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessOrderComponent } from './process-order/process-order.component';

const routes: Routes = [
  {
    path: '',
    component: ProcessOrderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
