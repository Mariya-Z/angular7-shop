import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();

  const mockCart = [
    {
      item: {
        name: 'ice-cream',
        price: 11,
      },
      quantity: 1,
    },
    {
      item: {
        name: 'apple',
        price: 2,
      },
      quantity: 7,
    },
    {
      item: {
        name: 'cucumber',
        price: 1,
      },
      quantity: 4,
    },
  ];

  const cartSortByPriceIncrease = [
    {
      item: {
        name: 'ice-cream',
        price: 11,
      },
      quantity: 1,
    },
    {
      item: {
        name: 'apple',
        price: 2,
      },
      quantity: 7,
    },
    {
      item: {
        name: 'cucumber',
        price: 1,
      },
      quantity: 4,
    },
  ];

  const cartSortByPriceDecrease = [
    {
      item: {
        name: 'cucumber',
        price: 1,
      },
      quantity: 4,
    },
    {
      item: {
        name: 'apple',
        price: 2,
      },
      quantity: 7,
    },
    {
      item: {
        name: 'ice-cream',
        price: 11,
      },
      quantity: 1,
    },
  ];

  const cartSortByNameIncrease = [
    {
      item: {
        name: 'ice-cream',
        price: 11,
      },
      quantity: 1,
    },
    {
      item: {
        name: 'cucumber',
        price: 1,
      },
      quantity: 4,
    },
    {
      item: {
        name: 'apple',
        price: 2,
      },
      quantity: 7,
    },
  ];

  const cartSortByNameDecrease = [
    {
      item: {
        name: 'apple',
        price: 2,
      },
      quantity: 7,
    },
    {
      item: {
        name: 'cucumber',
        price: 1,
      },
      quantity: 4,
    },
    {
      item: {
        name: 'ice-cream',
        price: 11,
      },
      quantity: 1,
    },
  ];

  const cartSortByQuantityIncrease = [
    {
      item: {
        name: 'apple',
        price: 2,
      },
      quantity: 7,
    },
    {
      item: {
        name: 'cucumber',
        price: 1,
      },
      quantity: 4,
    },
    {
      item: {
        name: 'ice-cream',
        price: 11,
      },
      quantity: 1,
    },
  ];

  const cartSortByQuantityDecrease = [
    {
      item: {
        name: 'ice-cream',
        price: 11,
      },
      quantity: 1,
    },
    {
      item: {
        name: 'cucumber',
        price: 1,
      },
      quantity: 4,
    },
    {
      item: {
        name: 'apple',
        price: 2,
      },
      quantity: 7,
    },
  ];

  it('should sort cart by product price increase', () => {
    expect(pipe.transform(mockCart, 'price', true)).toEqual(
      cartSortByPriceIncrease,
    );
  });

  it('should sort cart by product price decrease', () => {
    expect(pipe.transform(mockCart, 'price', false)).toEqual(
      cartSortByPriceDecrease,
    );
  });

  it('should sort cart by product name increase', () => {
    expect(pipe.transform(mockCart, 'name', true)).toEqual(
      cartSortByNameIncrease,
    );
  });

  it('should sort cart by product name decrease', () => {
    expect(pipe.transform(mockCart, 'name', false)).toEqual(
      cartSortByNameDecrease,
    );
  });

  it('should sort cart by product quantity increase', () => {
    expect(pipe.transform(mockCart, 'quantity', true)).toEqual(
      cartSortByQuantityIncrease,
    );
  });

  it('should sort cart by product quantity decrease', () => {
    expect(pipe.transform(mockCart, 'quantity', false)).toEqual(
      cartSortByQuantityDecrease,
    );
  });
});
