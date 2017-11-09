import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { APP_INITIALIZER } from '@angular/core';
import { PermissionService } from './_services/permissions.services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [
    PermissionService,
    {
      provide: APP_INITIALIZER,
      useFactory: (prem: PermissionService, ps: NgxPermissionsService ) => function() {return prem.load().then((data) => {return ps.loadPermissions(data)})},
      deps: [PermissionService, NgxPermissionsService],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
