import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products/products.service';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: Item[];

  constructor(public productsService: ProductsService,
              public cartService: CartService) { }

  ngOnInit() {
    this.productList = this.productsService.getProducts();
  }

  onBuy(item: Item): void {
    this.cartService.buyProduct(item);
    console.log('You have bought ' + item.name);
  }

}
