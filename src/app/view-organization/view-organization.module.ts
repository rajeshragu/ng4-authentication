import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewOrganizationRoutingModule } from './view-organization-routing.module';
import { ViewOrganizationComponent } from './view-organization.component';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule,
    ViewOrganizationRoutingModule,
    NgxPermissionsModule.forChild()
  ],
  declarations: [ViewOrganizationComponent]
})
export class ViewOrganizationModule { }
