import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchCurrentUserAction } from './auth/store/actions/fetch-current-user.actions';
import { AppStateInterface } from './shared/types/app-state.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store$: Store<AppStateInterface>) {}
  ngOnInit(): void {
    this.store$.dispatch(fetchCurrentUserAction());
  }
}
