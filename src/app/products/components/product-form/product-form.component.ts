import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../services';
import { pluck, switchAll, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  product: Item = {} as Item;
  isProductNew = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productServie: ProductsService,
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: Params) =>
        this.productServie.getProduct(+params.get('productID')),
      ),
    )
    .subscribe(
      (item) => {
        (this.product = { ...item });
        this.isProductNew = false;
      },
      err => console.log(err),
    );
  }

  onProductSave() {
    if (this.isProductNew) {
      this.productServie.createProduct(this.product);
    } else {
      this.productServie.updateProduct(this.product);
    }
    this.onGoBack();
  }

  onGoBack() {
    this.router.navigate(['./../../../'], { relativeTo: this.route });
  }
}
