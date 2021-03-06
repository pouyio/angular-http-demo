import { Component } from '@angular/core';
import { WarsService } from '../api/wars.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component {

  response1: string;
  response2: Observable<string>;

  constructor(private api: WarsService) {

    // Subscription
    this.api.getPlanet(1).subscribe(r => {
      this.response1 = r;
      console.log('Primera ', this.response1);
    });

    // Using Observable
    this.response2 = this.api.getPlanet(2).do(console.log);
  }

}
