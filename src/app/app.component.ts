import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routes: Routes;
  constructor() {
    this.routes = appRoutes;
  }
}
