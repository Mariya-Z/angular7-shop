import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  itemList;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.itemList = this.cartService.getAll();
  }

}
