import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable,  } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WarsService {

  private baseUrl = 'http://swapi.co/api';

  constructor(private http: Http) { }

  // Extracting data
  getPlanet(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/planets/${id}`, {headers: this.getHeaders()}).map(r => r.json());
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}
