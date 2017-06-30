import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routes: any[];
  constructor() {
    this.routes = [
      'demo-1',
      'demo-2',
      'demo-3/10',
      'demo-4'
    ];
  }
}
