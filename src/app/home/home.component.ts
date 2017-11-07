import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private permissionsService: NgxPermissionsService,
  ) { }  

  ngOnInit() {
    //const perm = ["ADMINISTRATOR", "TEAM MANAGER", "ADJUSTOR", "PROCESSOR", "GUEST"];
    const perm = ["GUEST"];
    this.permissionsService.loadPermissions(perm);
  }

  public addOrganization(){
    this.router.navigate(['add-organization']);
  }

  public viewOrganization(){
    this.router.navigate(['view-organization']);
  }
}
