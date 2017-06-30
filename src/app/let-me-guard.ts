import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LetMeInGuard implements CanActivate {

  canActivate(): Observable<boolean> {
    let pass = (Math.random() > 0.8)
    return Observable.of(pass);
  }
}

@Injectable()
export class LetMeOutGuard implements CanDeactivate<any> {

  canDeactivate(): Observable<boolean> {
    let leave = (Math.random() > 0.8)
    return Observable.of(leave);
  }
}
