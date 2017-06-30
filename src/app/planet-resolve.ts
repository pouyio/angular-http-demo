import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { WarsService } from './api/wars.service';

@Injectable()
export class PlanetResolve implements Resolve<any> {

    constructor(private api: WarsService) {}

    resolve = (route: ActivatedRouteSnapshot) => this.api.getPlanet(+route.paramMap.get('id'));

}
