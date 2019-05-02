import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ProductListComponent,
  ProductComponent,
  FeedbackComponent,
} from './products';
import { PathNotFoundComponent, LoginComponent } from './shared';
import { AdminComponent } from './admin';

import { AuthGuard } from './core';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    // canLoad: [AuthGuard],
    loadChildren: './admin/admin.module#AdminModule',
  },
  // {
  //   path: 'product/:productID',
  //   component: ProductComponent,
  //   children: [
  //     {
  //       path: 'feedback',
  //       component: FeedbackComponent,
  //       outlet: 'feedback',
  //     },
  //   ],
  // },
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
