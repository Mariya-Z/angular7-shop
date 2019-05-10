import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
  Router,
} from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductHttpService } from '../services';
import { ProductModel } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductResolveGuard implements Resolve<ProductModel> {
  constructor(
    private router: Router,
    private productHttpService: ProductHttpService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<ProductModel> | Promise<ProductModel> | ProductModel {
    if (!route.paramMap.has('productID')) {
      return null;
    }
    const id = +route.paramMap.get('productID');

    return this.productHttpService.getProduct(id).pipe(
      map((product: ProductModel) => {
        if (product) {
          return product;
        } else {
          this.router.navigate(['/products']);
          return null;
        }
      }),
    );

    // if service return Promise

    // if (id) {
    //   return this.productHttpService.getProduct(id).then(product => {
    //     if (product) {
    //       return product;
    //     } else {
    //       this.router.navigate(['/products']);
    //       return null;
    //     }
    //   });
    // }
  }
}
