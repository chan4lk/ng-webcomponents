import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MovieState, selectMovies, pageLoaded } from '../+state/dashboard.reducer';
import { map } from 'rxjs/operators';
import { Item } from '../../models/Item';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data$: Observable<string[]>;

  constructor(private store: Store<MovieState>) { }

  ngOnInit() {
    this.data$ = this.store.pipe(
      select(selectMovies),
      map(d => d.data.map(i => i.title)));

    this.store.dispatch(pageLoaded());
  }

}
