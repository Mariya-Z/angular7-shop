import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductHttpService } from '../../services';
import { ProductModel } from '../../model/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  product: ProductModel = new ProductModel();
  isProductNew = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productHttpService: ProductHttpService,
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (data.product.id) {
        this.product = { ...data.product };
        this.isProductNew = false;
      }
    });
  }

  onProductSave() {
    const product = { ...this.product };

    const method = this.isProductNew ? 'createProduct' : 'updateProduct';
    this.productHttpService[method](product)
      .then(() => this.onGoBack())
      .catch(err => console.log(err));
  }

  onGoBack() {
    this.router.navigate(['./../../../'], { relativeTo: this.route });
  }
}
