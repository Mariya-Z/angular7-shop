import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductListComponent } from '../products';
import { CartListComponent } from '../cart';
import { ProductsComponent } from '../products/products.component';
import { ProductFormComponent } from '../products/components/product-form/product-form.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            component: ProductsComponent,
            children: [
              { path: 'products', component: ProductListComponent },
              { path: 'product/add', component: ProductFormComponent },
              { path: '**', redirectTo: './products', pathMatch: 'full' },
            ],
          },
          { path: 'cart', component: CartListComponent },
        ],
      },
    ],
  },
];

export const adminRouterComponents = [AdminComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
