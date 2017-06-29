import { Component } from '@angular/core';
import { WarsService } from '../api/wars.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component {

  results: Observable<any>;

  constructor(private api: WarsService) {
  }

  search(term: string) {
    this.results = this.api.search(term);
  }

}
