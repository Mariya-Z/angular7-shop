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
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    FeedbackComponent,
    ProductFormComponent,
    ProductsComponent,
  ],
  exports: [
    ProductComponent,
    ProductListComponent,
    FeedbackComponent,
    ProductFormComponent,
    ProductsComponent,
  ],
  imports: [CommonModule, FormsModule, SharedModule, ProductRoutingModule],
})
export class ProductsModule {}
