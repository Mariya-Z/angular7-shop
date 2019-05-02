import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductListComponent } from '../products';
import { CartListComponent } from '../cart';
import { ProductsComponent } from '../products/products.component';
import { ProductFormComponent } from '../products/components/product-form/product-form.component';
import { AuthGuard } from '../core';
import { CartModule } from '../cart/cart.module';
import { ProductsModule } from '../products/products.module';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
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
  imports: [RouterModule.forChild(routes), CartModule, ProductsModule],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
