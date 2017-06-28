import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';

import {WarsService} from './api/wars.service';
import { Demo1Component } from './demo1/demo1.component';

const appRoutes: Routes = [
  { path: 'demo-1', component: Demo1Component }
];

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component
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
