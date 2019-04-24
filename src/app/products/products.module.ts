import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ProductListComponent,
  ProductComponent,
  FeedbackComponent,
} from './components';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, FeedbackComponent],
  exports: [ProductComponent, ProductListComponent, FeedbackComponent],
  imports: [CommonModule, SharedModule, ProductRoutingModule],
})
export class ProductsModule {}
