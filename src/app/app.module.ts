import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';

import { WarsService } from './api/wars.service';
import { PlanetResolve } from './planet-resolve';
import { LetMeInGuard, LetMeOutGuard } from './let-me-guard';

import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [WarsService, PlanetResolve, LetMeInGuard, LetMeOutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
