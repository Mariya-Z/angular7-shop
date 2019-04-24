import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductListComponent } from '../products';
import { CartListComponent } from '../cart';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'products', component: ProductListComponent },
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
