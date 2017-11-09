import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
    { 
        path: 'add-organization',
        loadChildren: './add-organization/add-organization.module#AddOrganizationModule',
        canLoad: [NgxPermissionsGuard],
        data: {
            permissions: {
                only: ['ADMINISTRATOR'],
                redirectTo: 'error'
            }
        }
    },
    {
        path: 'view-organization',
        loadChildren: './view-organization/view-organization.module#ViewOrganizationModule',
        canLoad: [NgxPermissionsGuard],
        data: {
            permissions: {
                only: ['ADMINISTRATOR', 'GUEST'],
                redirectTo: 'error'
            }
        }
    },
    { 
        path: 'home', 
        loadChildren: './home/home.module#HomeModule',
        canLoad: [NgxPermissionsGuard],
        data: {
            permissions: {
                only: ['ADMINISTRATOR', 'GUEST'],
                redirectTo: 'error'
            }
        }
    },
    { 
        path: 'error', 
        loadChildren: './error/error.module#ErrorModule'
    },
    { 
        path: '', 
        loadChildren: './home/home.module#HomeModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
