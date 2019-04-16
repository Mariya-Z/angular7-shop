import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() product: ProductList;
  @Output() removeEmit = new EventEmitter();
  @Output() decreaseEmit = new EventEmitter();
  @Output() increaseEmit = new EventEmitter();

  onRemove() {
    this.removeEmit.emit(this.product);
  }

  onDecrease() {
    this.decreaseEmit.emit(this.product);
  }

  onIncrease() {
    this.increaseEmit.emit(this.product);
  }

}
