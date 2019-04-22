import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(products: [], field: string, flag: boolean, args?: any): any {
    console.log(products);
    console.log(field);
    console.log(flag);
    return products.sort((a, b) => {
      return a[field] - b[field];
    });
  }
}
