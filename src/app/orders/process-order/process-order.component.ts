import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Order } from '../model/order';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.scss'],
})
export class ProcessOrderComponent implements OnInit {
  order: Order = new Order();
  orderForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.formInit();
    this.buildForm();
  }

  private buildForm() {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: [
        { value: 'Zhyrytskyy', disabled: false },
        [Validators.required, Validators.maxLength(30)],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'),
          Validators.email,
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('[+]?[0-9]+'),
        ],
      ],
      delivery: true,
      adress: ['', [Validators.minLength(5), Validators.maxLength(50)]],
    });
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

  onSetDelivery(delivery: boolean) {
    const adressControl = this.orderForm.get('adress');
    if (delivery) {
      adressControl.clearValidators();
    } else {
      adressControl.setValidators([
        Validators.minLength(5),
        Validators.maxLength(50),
      ]);
    }
    adressControl.updateValueAndValidity();
  }

  onSave() {
    console.log('order');
    // Form model
    console.log(this.orderForm);
    // Form value w/o disabled controls
    console.log(`Saved: ${JSON.stringify(this.orderForm.value)}`);
    // Form value w/ disabled controls
    console.log(`Saved: ${JSON.stringify(this.orderForm.getRawValue())}`);
  }
}
