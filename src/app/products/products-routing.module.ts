import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './components';

const routes: Routes = [
  {
    path: 'feedback',
    component: FeedbackComponent,
    outlet: 'feedback',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
