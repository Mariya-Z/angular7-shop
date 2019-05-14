import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProcessOrderComponent } from './process-order/process-order.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [ProcessOrderComponent],
  imports: [CommonModule, OrdersRoutingModule, ReactiveFormsModule],
})
export class OrdersModule {}
