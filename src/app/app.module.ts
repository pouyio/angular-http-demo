import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';

import {WarsService} from './api/wars.service';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';

export const appRoutes: Routes = [
  { path: 'demo-1', component: Demo1Component },
  { path: 'demo-2', component: Demo2Component },
  { path: 'demo-3', component: Demo3Component },
  { path: 'demo-4', component: Demo4Component },
];

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
