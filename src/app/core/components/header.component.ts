import { Component, OnInit } from '@angular/core';
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from '@app/auth/store/auth.selectors';
import { AppStateInterface } from '@app/shared/types/app-state.interface';
import { CurrentUserInterface } from '@app/shared/types/current-user.interface';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'mca-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean | null>;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<CurrentUserInterface | null>;

  constructor(private store$: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store$.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store$.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store$.pipe(select(currentUserSelector));
  }
}
