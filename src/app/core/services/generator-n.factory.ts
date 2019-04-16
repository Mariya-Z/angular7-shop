import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const generatorN = new InjectionToken<any[]>('DataN');

export function GeneratorNFactory(n: number) {
  return (data: GeneratorService): string => {
    return data.getData(n);
  };
}
