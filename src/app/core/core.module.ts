import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoreServicesModule } from './core-services.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContactUsComponent],
  exports: [ContactUsComponent],
  imports: [CommonModule, CoreServicesModule, SharedModule],
})
export class CoreModule {}
