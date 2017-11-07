import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';

const routes: Routes = [
    { path: 'add-organization', loadChildren: './add-organization/add-organization.module#AddOrganizationModule' },
    { path: 'view-organization', loadChildren: './view-organization/view-organization.module#ViewOrganizationModule' },
    {path: '', loadChildren: './home/home.module#HomeModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
