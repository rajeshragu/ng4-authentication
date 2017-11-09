import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PermissionService {
    constructor(private http: Http) {}
    public load(): Promise<any> {
      return this.http.get('../assets/permissions.json')
               .toPromise()
               .then(response => response.json());
    }
}
