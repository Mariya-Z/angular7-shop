import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() product: ProductList;
  @Output() buyEmit = new EventEmitter();

  onRemove() {
    this.buyEmit.emit(this.product);
  }

}
