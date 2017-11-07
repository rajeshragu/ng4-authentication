import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxPermissionsModule.forChild()
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
