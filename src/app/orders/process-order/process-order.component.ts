import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Order } from '../model/order';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.scss'],
})
export class ProcessOrderComponent implements OnInit {
  order: Order = new Order();
  orderForm: FormGroup;

  constructor() {}

  ngOnInit() {
   this.formInit()
  }

  private formInit() {
    this.orderForm = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      delivery: new FormControl(),
      adress: new FormControl(),
    });
  }

  onSave() {
    console.log('order');
  }
}
