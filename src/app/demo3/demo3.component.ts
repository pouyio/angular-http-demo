import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component {

  info: any;

  constructor(private route: ActivatedRoute) {
    this.info = this.route.snapshot.data['planet'];
  }

}
