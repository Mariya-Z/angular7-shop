import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  FeedbackComponent,
  ProductComponent,
  ProductFormComponent,
} from './components';
import { ProductResolveGuard } from './guards';

const routes: Routes = [
  {
    path: 'product/add',
    component: ProductFormComponent,
  },
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
    resolve: {
      product: ProductResolveGuard,
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
