import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MovieState, selectMovies, pageLoaded } from '../+state/dashboard.reducer';
import { map } from 'rxjs/operators';
import { Item } from '../../models/Item';
import { Observable } from 'rxjs';
import { ThemeService } from '../../core/services/style-manager.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  data$: Observable<string[]>;

  constructor(private store: Store<MovieState>, private themeManger: ThemeService) { }

  ngOnInit() {
    this.data$ = this.store.pipe(
      select(selectMovies),
      map(d => d.data.map(i => i.title)));

    this.store.dispatch(pageLoaded());

    this.themeManger.setDarkMode(false);
  }

  toggle(event:MouseEvent){
    if(event.target instanceof HTMLInputElement){
      const checked = event.target.checked;
      this.themeManger.setDarkMode(checked);
    }
  }

}
