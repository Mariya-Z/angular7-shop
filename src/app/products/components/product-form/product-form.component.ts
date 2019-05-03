import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services';

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
    this.route.data.subscribe(data => {
      console.log(data);
      if (Object.keys(data).length !== 0) {
        this.product = { ...data.product };
        this.isProductNew = false;
      }
    });
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
