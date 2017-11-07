import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewOrganizationRoutingModule } from './view-organization-routing.module';
import { ViewOrganizationComponent } from './view-organization.component';

@NgModule({
  imports: [
    CommonModule,
    ViewOrganizationRoutingModule
  ],
  declarations: [ViewOrganizationComponent]
})
export class ViewOrganizationModule { }
