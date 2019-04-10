import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  exports: [ProductComponent, ProductListComponent],
  imports: [CommonModule],
})
export class ProductsModule {}
