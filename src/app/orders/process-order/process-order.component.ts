import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Order } from '../model/order';

// rxjs
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.scss'],
})
export class ProcessOrderComponent implements OnInit, OnDestroy {
  order: Order = new Order();
  orderForm: FormGroup;
  validationMessage = {
    name: '',
    lastname: '',
    email: '',
    adress: '',
  };
  private sub: Subscription;

  private validationMessagesMap = {
    name: {
      required: 'Please enter your name.',
      minlength: 'The first name must be longer than 2 characters.',
    },
    lastname: {
      required: 'Please enter your last name.',
      maxlength: 'The last name must be shorter than 30 characters.',
    },
    email: {
      required: 'Please enter your email address.',
      pattern: 'Please enter a incorrect email address.',
      email: 'Please enter a valid email address.',
    },
    adress: {
      required: 'Please enter your address.',
      minlength: 'The adress must be longer than 5 characters.',
      maxlength: 'The adress must be shorter than 50 characters.',
    },
  };

  constructor(private fb: FormBuilder) {}

  get phones(): FormArray {
    return this.orderForm.get('phones') as FormArray;
  }

  ngOnInit() {
    // this.formInit();
    this.buildForm();
    this.watchValueChanges();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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

  onBlur(name: string) {
    const emailControl = this.orderForm.get(name);
    this.setValidationMessage(emailControl, name);
  }

  onAddPhone(): void {
    this.phones.push(this.buildPhone());
  }

  onRemovePhone(): void {
    this.phones.removeAt(this.phones.length - 1);
  }

  private setValidationMessage(c: AbstractControl, controlName: string) {
    this.validationMessage[controlName] = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.validationMessage[controlName] = Object.keys(c.errors)
        .map(key => this.validationMessagesMap[controlName][key])
        .join(' ');
    }
  }

  private buildPhone(): FormControl {
    return this.fb.control('');
  }

  private buildForm() {
    this.orderForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(2)]],
        lastname: [
          { value: '', disabled: false },
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
        phones: this.fb.array([this.buildPhone()]),
        delivery: [true, { updateOn: 'change' }],
        adress: [
          '',
          [
            Validators.minLength(5),
            Validators.maxLength(50),
            Validators.required,
          ],
        ],
      },
      // { updateOn: 'blur' },
    );
  }

  private watchValueChanges() {
    this.sub = this.orderForm
      .get('delivery')
      .valueChanges.subscribe(value => this.setDelivery(value));

    const nameControl = this.orderForm.get('name');
    const subName = nameControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(value => {
        this.setValidationMessage(nameControl, 'name');
      });

    const lastnameControl = this.orderForm.get('lastname');
    const subLastame = lastnameControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(value => {
        this.setValidationMessage(lastnameControl, 'lastname');
      });

    const emailControl = this.orderForm.get('email');
    const subEmail = emailControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(value => this.setValidationMessage(emailControl, 'email'));

    const adressControl = this.orderForm.get('adress');
    const subAdress = adressControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(value => this.setValidationMessage(adressControl, 'adress'));

    this.sub
      .add(subName)
      .add(subLastame)
      .add(subEmail)
      .add(subAdress);
  }

  private setDelivery(delivery: boolean) {
    const adressControl = this.orderForm.get('adress');
    if (!delivery) {
      adressControl.clearValidators();
    } else {
      adressControl.setValidators([
        Validators.minLength(5),
        Validators.maxLength(50),
        Validators.required,
      ]);
    }
    adressControl.updateValueAndValidity();
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
}
