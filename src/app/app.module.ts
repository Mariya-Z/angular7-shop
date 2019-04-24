import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { CoreModule } from './core/core.module';
import { OrdersModule } from './orders/orders.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    ProductsModule,
    CartModule,
    CoreModule,
    OrdersModule,
    SharedModule,

     // LAST ONE
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
