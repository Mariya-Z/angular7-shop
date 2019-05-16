import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';

import { switchMap } from 'rxjs/operators';

import { ProductHttpService } from '../../services';
import { ProductModel } from '../../model/product.model';
import { Item } from './../../../core/interfaces';

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
  @Input() product: ProductModel;
  @Output() editProduct = new EventEmitter<Item>();
  isDisplayed = false;

  constructor(
    private route: ActivatedRoute,
    public productHttpService: ProductHttpService,
    private router: Router,
    private location: Location,
  ) {}

  ngOnInit(): void {
    if (!this.product) {
      this.product = new ProductModel();
      this.productHttpService.isDisplayed = true;

      // it is not necessary to save subscription to route.paramMap
      // it handles automatically
      this.route.paramMap
        .pipe(
          switchMap((params: Params) =>
            this.productHttpService.getProduct(+params.get('productID')),
          ),
        )
        .subscribe(
          item => (this.product = { ...item }),
          err => console.log(err),
        );
    }
  }

  onShowFeedback(): void {
    this.productHttpService.isDisplayed = false;
    this.router.navigate([
      `product/${this.product.id}`,
      { outlets: { feedback: ['feedback'] } },
    ]);
  }

  onGoBack() {
    this.location.back();
  }
}
