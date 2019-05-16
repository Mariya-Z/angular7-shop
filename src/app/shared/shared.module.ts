import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './pipes/order-by.pipe';
import { HighlightDirective, ShowUpDirective } from './directives';
import { PathNotFoundComponent, LoginComponent } from './components';

export const sharedComponents = [
  HighlightDirective,
  ShowUpDirective,
  OrderByPipe,
  PathNotFoundComponent,
  LoginComponent,
];

@NgModule({
  declarations: [...sharedComponents],
  exports: [...sharedComponents],
  imports: [CommonModule],
})
export class SharedModule {}
