import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CartItemComponent } from './cart-item.component';
import { CartListComponent } from '../cart-list/cart-list.component';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  const mockProduct = {
    item: {
      id: 5,
      name: 'watermelon',
      description: 'best for summer',
      price: 20,
      isAvailable: true,
      ingredients: ['water', 'vitamins'],
      weight: 100,
    },
    quantity: 1,
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartItemComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    component.product = mockProduct;
    de = fixture.debugElement.query(By.css('.item'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display product', () => {
    console.log(el.innerText);
    expect(el.innerText).toContain('Name: watermelon');
    expect(el.innerText).toContain('Description: best for summer');
    expect(el.innerText).toContain('Price: 20');
    expect(el.innerText).toContain('Quantity: 1');
  });

  it('should increase number of product', () => {
    const spy = spyOn(component, 'onIncrease');
    component.onIncrease();
    expect(spy).toHaveBeenCalled();
  });
});
