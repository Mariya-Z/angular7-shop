import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent, CartListComponent } from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartItemComponent, CartListComponent],
  exports: [CartItemComponent, CartListComponent],
  imports: [CommonModule, SharedModule],
})
export class CartModule {}
