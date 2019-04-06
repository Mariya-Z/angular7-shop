import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
