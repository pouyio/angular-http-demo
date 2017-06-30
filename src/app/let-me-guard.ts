import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LetMeInGuard implements CanActivate {

  private counter = 0;

  canActivate(): Observable<boolean> {
    this.counter ++;
    return Observable.of(isNope(this.counter));
  }
}

@Injectable()
export class LetMeOutGuard implements CanDeactivate<any> {

  private counter = 0;

  canDeactivate(): Observable<boolean> {
    this.counter ++;
    return Observable.of(isNope(this.counter));
  }
}

const isNope = (counts: number) => {
  let yep = !Boolean(counts % 3);
  if(!yep) console.warn('nope!', counts);
  return yep;
}
