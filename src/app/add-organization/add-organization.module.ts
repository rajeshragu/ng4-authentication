import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddOrganizationRoutingModule } from './add-organization-routing.module';
import { AddOrganizationComponent } from './add-organization.component';

@NgModule({
  imports: [
    CommonModule,
    AddOrganizationRoutingModule
  ],
  declarations: [AddOrganizationComponent]
})
export class AddOrganizationModule { }
