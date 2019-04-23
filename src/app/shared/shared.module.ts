import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './pipes/order-by.pipe';
import { HighlightDirective, ShowUpDirective } from './directives';

@NgModule({
  declarations: [HighlightDirective, ShowUpDirective, OrderByPipe],
  exports: [HighlightDirective, ShowUpDirective, OrderByPipe],
  imports: [CommonModule],
})
export class SharedModule {}
