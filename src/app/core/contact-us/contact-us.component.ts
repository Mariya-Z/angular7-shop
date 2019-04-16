import { Component, Optional, Inject } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { ConfigOptionsService } from '../services/config-options.service';
import { ConstantsService } from '../services/constants.service';
import { generatorN, GeneratorNFactory } from '../services/generator-n.factory';
import { GeneratorService } from '../services/generator.service';

const constant = {
  service: 'ConstantsService',
  option: 'useValue',
};
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  providers: [
    {
      provide: ConstantsService,
      useValue: constant,
    },
    GeneratorService,
    {
      provide: generatorN,
      useFactory: GeneratorNFactory(6),
      deps: [GeneratorService],
    },
  ],
})
export class ContactUsComponent {
  item: Item = {
    name: 'tomato',
    description: 'best choise for salad',
    price: 1,
    isAvailable: true,
    ingredients: ['water', 'vitamins'],
  };

  config = {
    id: 1,
    login: 'name',
    email: 'name@epam',
  };

  constructor(
    @Optional() private localStorage: LocalStorageService,
    @Optional() private configOptions: ConfigOptionsService,
    @Optional() public constants: ConstantsService,
    @Optional() @Inject(generatorN) public generator: any[],
  ) {}

  onSet(): void {
    this.localStorage.setItem(this.item);
  }

  onGet() {
    this.localStorage.getItem(this.item);
  }

  onRemove(): void {
    this.localStorage.removeItem(this.item);
  }

  onSetConfig(): void {
    this.configOptions.setConfig(this.config);
  }

  onGetConfig(): void {
    console.log('Config is');
    console.log(this.configOptions.getConfig());
  }
}
