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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productServie: ProductsService,
  ) {}

  ngOnInit() {}

  onProductSave() {
    this.productServie.createProduct(this.product);
    this.onGoBack();
  }

  onGoBack() {
    this.router.navigate(['./../../'], { relativeTo: this.route });
  }
}
