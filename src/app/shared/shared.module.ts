import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './pipes/order-by.pipe';
import { HighlightDirective, ShowUpDirective } from './directives';
import { PathNotFoundComponent, LoginComponent } from './components';

@NgModule({
  declarations: [HighlightDirective, ShowUpDirective, OrderByPipe, PathNotFoundComponent, LoginComponent],
  exports: [HighlightDirective, ShowUpDirective, OrderByPipe, PathNotFoundComponent, LoginComponent],
  imports: [CommonModule],
})
export class SharedModule {}
