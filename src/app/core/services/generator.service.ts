import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {
  possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  getData(n: number): string {
    let text = '';
    for (let i = 0; i < n; i++) {
      text += this.possible.charAt(
        Math.floor(Math.random() * this.possible.length),
      );
    }
    return text;
  }
}
