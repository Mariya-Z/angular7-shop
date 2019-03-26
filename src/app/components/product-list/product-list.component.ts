import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList;

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.productList = this.productsService.getProducts();
  }

}
