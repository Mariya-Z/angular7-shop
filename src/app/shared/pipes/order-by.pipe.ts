import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false,
})
export class OrderByPipe implements PipeTransform {
  transform(products: any, field: string, flag: boolean, args?: any): any {
    let order: number;
    if (!flag) {
      order = 1;
    } else {
      order = -1;
    }
    if (field !== 'quantity') {
      return products.sort((a, b) => {
        if (a.item[field] > b.item[field]) {
          return order;
        } else {
          return -1 * order;
        }
      });
    } else {
      return products.sort((a, b) => {
        if (a[field] > b[field]) {
          return order;
        } else {
          return -1 * order;
        }
      });
    }
  }
}
