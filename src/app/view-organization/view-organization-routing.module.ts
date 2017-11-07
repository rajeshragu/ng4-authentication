import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewOrganizationComponent } from './view-organization.component';


const routes: Routes = [
  {path: '', component: ViewOrganizationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewOrganizationRoutingModule { }
