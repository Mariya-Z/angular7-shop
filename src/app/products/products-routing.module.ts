import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent, ProductComponent, ProductFormComponent } from './components';

const routes: Routes = [
  {
    path: 'product/:productID',
    component: ProductComponent,
    children: [
      {
        path: 'feedback',
        component: FeedbackComponent,
        outlet: 'feedback',
      },
    ],
  },
  {
    path: 'product/edit/:productID',
    component: ProductFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
