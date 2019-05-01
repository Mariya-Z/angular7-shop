import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { ProductsService } from '../../services';

export enum category {
  FOOD,
  DRINK,
  CLOTHERS,
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Item;
  @Output() editProduct = new EventEmitter<Item>();
  isDisplayed = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (!this.product) {
      this.product = {} as Item;
      this.productService.isDisplayed = true;

      // it is not necessary to save subscription to route.paramMap
      // it handles automatically
      this.route.paramMap
        .pipe(
          switchMap((params: Params) =>
            this.productService.getProduct(+params.get('productID')),
          ),
        )
        .subscribe(
          item => (this.product = { ...item }),
          err => console.log(err),
        );
    }
  }

  onShowFeedback(): void {
    this.productService.isDisplayed = false;
    this.router.navigate([
      `product/${this.product.id}`,
      { outlets: { feedback: ['feedback'] } },
    ]);
  }

  onEditProduct(): void {
    this.editProduct.emit(this.product);
  }
}
