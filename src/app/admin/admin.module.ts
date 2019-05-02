import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AdminRoutingModule,
  adminRouterComponents,
} from './admin-routing.module';

@NgModule({
  declarations: [adminRouterComponents],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
