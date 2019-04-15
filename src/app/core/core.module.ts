import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoreServicesModule } from './core-services.module';

@NgModule({
  declarations: [ContactUsComponent],
  exports: [ContactUsComponent],
  imports: [CommonModule, CoreServicesModule],
})
export class CoreModule {}
