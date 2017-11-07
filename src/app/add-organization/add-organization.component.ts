import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.css']
})
export class AddOrganizationComponent implements OnInit {

  constructor(private router: Router) { }  

  ngOnInit() {
  }

  public viewOrganization(){
    this.router.navigate(['view-organization']);
  }

  public home(){
    this.router.navigate(['/']);
  }

}
