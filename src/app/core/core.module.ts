import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoreServicesModule } from './core-services.module';
import { SharedModule } from '../shared/shared.module';
import { CoreStoreModule } from './+store/core-store.module';

@NgModule({
  declarations: [ContactUsComponent],
  exports: [ContactUsComponent],
  imports: [CommonModule, CoreServicesModule, SharedModule, CoreStoreModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        `CoreModule is already loaded. Import it in the AppModule only.`,
      );
    }
  }
}
