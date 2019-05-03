import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class ProductResolveGuard implements Resolve<Item> {
  constructor(
    private router: Router,
    private productService: ProductsService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Item> | Promise<Item> | Item {
    console.log(route.paramMap.has('productID'));

    if (!route.paramMap.has('productID')) {
      return null;
    }
    const id = +route.paramMap.get('productID');

    console.log(route.paramMap.get('productID'));

    if (id) {
      return this.productService.getProduct(id).then(product => {
        if (product) {
          return product;
        } else {
          this.router.navigate(['/products']);
          return null;
        }
      });
    }
  }
}
