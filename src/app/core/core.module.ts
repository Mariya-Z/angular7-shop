import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [ContactUsComponent],
  exports: [ContactUsComponent],
  imports: [CommonModule],
})
export class CoreModule {}
