import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products';
import { PathNotFoundComponent, LoginComponent } from './shared';

import { AuthGuard } from './core';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'order',
    loadChildren: './orders/orders.module#OrdersModule',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: './admin/admin.module#AdminModule',
  },
  {
    path: '',
    redirectTo: '/product-list',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PathNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
