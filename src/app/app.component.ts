import { Component } from '@angular/core';
import { WarsService } from './api/wars.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular HTTP Module';

  response1: number;
  response2: Observable<number>;

  constructor(private api: WarsService) {

    this.api.getPlanets().subscribe(r => {
      this.response1 = r;
      console.log('Primera ', this.response1);
    });

    this.response2 = this.api.getPlanets().do(console.log);
  }

}
