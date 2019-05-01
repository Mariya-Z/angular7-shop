import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ProductListComponent,
  ProductComponent,
  FeedbackComponent,
} from './components';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './products-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    FeedbackComponent,
    ProductFormComponent,
  ],
  exports: [ProductComponent, ProductListComponent, FeedbackComponent],
  imports: [CommonModule, SharedModule, ProductRoutingModule],
})
export class ProductsModule {}
