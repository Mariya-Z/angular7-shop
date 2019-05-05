import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// @ngrx
import { StoreModule } from '@ngrx/store';
import { productsReducer } from '../core/+store';

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
import { ProductsServiceModule } from './products-service.module';

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
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductRoutingModule,
    ProductsServiceModule,
    StoreModule.forFeature('products', productsReducer)
  ],
})
export class ProductsModule {}
