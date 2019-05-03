import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <h2>Products</h2>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
