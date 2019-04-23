import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { OrdersModule } from './orders/orders.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ProductsModule,
    CartModule,
    CoreModule,
    OrdersModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
