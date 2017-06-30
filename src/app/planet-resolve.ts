import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { WarsService } from './api/wars.service';

@Injectable()
export class PlanetResolve implements Resolve<any> {

  constructor(private api: WarsService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.api.getPlanet(+route.paramMap.get('id'))
      .catch(this.errorHandling);
  }

  private errorHandling(error) {
    console.warn('There was an error: ', error.json());
    return Observable.of({});
  }

}
