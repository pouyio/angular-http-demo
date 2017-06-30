import { Component } from '@angular/core';
import { WarsService } from '../api/wars.service';
import { Observable } from 'rxjs/Rx';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component {

  term = new FormControl();

  results: Observable<any[]>;

  constructor(private api: WarsService) {
    // Oobservable<any[]>  Observable<string>
    this.results = this.term.valueChanges
                    .filter(s => s.length)
                    .debounceTime(400)
                    .distinctUntilChanged()
                    .switchMap(term => api.search(term))
                    .map(r => r.results);


  }

}
