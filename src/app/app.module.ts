import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/components/product/product.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { CartItemComponent } from './cart/components/cart-item/cart-item.component';
import { HighlightDirective } from './shared/directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartListComponent,
    CartItemComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
