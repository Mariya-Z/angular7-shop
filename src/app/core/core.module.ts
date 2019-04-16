import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoreServicesModule } from './core-services.module';
import { ShowUpDirective } from './directive/show-up.directive';

@NgModule({
  declarations: [ContactUsComponent, ShowUpDirective],
  exports: [ContactUsComponent],
  imports: [CommonModule, CoreServicesModule],
})
export class CoreModule {}
