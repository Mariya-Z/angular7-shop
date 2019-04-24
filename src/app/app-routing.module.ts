import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent, ProductComponent } from './products';
import { PathNotFoundComponent } from './shared';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'product/:productID',
    component: ProductComponent,
  },
  // {
  //   path: 'feedback',
  //   component: PathNotFoundComponent,
  //   outlet: 'feedback',
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
