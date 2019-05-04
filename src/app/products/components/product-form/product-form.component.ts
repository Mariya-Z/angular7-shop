import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Subscription } from 'rxjs';

import { ProductHttpService } from '../../services';
import { ProductModel } from '../../model/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  product: ProductModel = new ProductModel();
  isProductNew = true;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productHttpService: ProductHttpService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data);
      if (Object.keys(data).length !== 0) {
        this.product = { ...data.product };
        this.isProductNew = false;
      }
    });
  }

  ngOnDestroy() {
    // for service with Observable
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onProductSave() {
    // for service with Observable
    // const product = { ...this.product };
    // const method = this.isProductNew ? 'createProduct' : 'updateProduct';
    // this.sub = this.productHttpService[method](product).subscribe(
    //   () =>
    //     product.id
    //       ? this.router.navigate(['product', { editedProductID: product.id }])
    //       : this.onGoBack(),
    //   (error: any) => console.log(error),
    // );

    // for service with promise
    const product = { ...this.product };
    const method = this.isProductNew ? 'createProduct' : 'updateProduct';
    this.productHttpService[method](product)
      .then(() => this.onGoBack())
      .catch(err => console.log(err));
  }

  onGoBack() {
    // this.router.navigate(['./../../../'], { relativeTo: this.route });
    this.location.back();
  }
}
