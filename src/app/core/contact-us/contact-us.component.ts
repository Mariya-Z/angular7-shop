import { Component, OnInit, Optional } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  item: Item = {
    name: 'tomato',
    description: 'best choise for salad',
    price: 1,
    isAvailable: true,
    ingredients: ['water', 'vitamins'],
  };

  constructor(@Optional() private localStorage: LocalStorageService) {}

  onSet(): void {
    this.localStorage.setItem(this.item);
  }

  onGet() {
    this.localStorage.getItem(this.item);
  }

  onRemove(): void {
    this.localStorage.removeItem(this.item);
  }
}
