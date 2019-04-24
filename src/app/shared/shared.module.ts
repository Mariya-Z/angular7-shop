import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './pipes/order-by.pipe';
import { HighlightDirective, ShowUpDirective } from './directives';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';

@NgModule({
  declarations: [HighlightDirective, ShowUpDirective, OrderByPipe, PathNotFoundComponent],
  exports: [HighlightDirective, ShowUpDirective, OrderByPipe, PathNotFoundComponent],
  imports: [CommonModule],
})
export class SharedModule {}
