import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-organization',
  templateUrl: './view-organization.component.html',
  styleUrls: ['./view-organization.component.css']
})
export class ViewOrganizationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public addOrganization(){
    this.router.navigate(['add-organization']);
  }

  public home(){
    this.router.navigate(['/']);
  }
}
