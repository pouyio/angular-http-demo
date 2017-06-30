import { Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { PlanetResolve } from './planet-resolve';
import { LetMeInGuard, LetMeOutGuard } from './let-me-guard';

export const AppRoutes: Routes = [
  { path: 'demo-1', component: Demo1Component },
  { path: 'demo-2', component: Demo2Component },
  { path: 'demo-3/:id', component: Demo3Component, resolve: {planet: PlanetResolve} },
  { path: 'demo-4', component: Demo4Component, canActivate: [LetMeInGuard], canDeactivate: [LetMeOutGuard] },
];
