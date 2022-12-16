import { Component, Input, OnInit } from '@angular/core';
import { isLoggedInSelector } from '@app/modules/auth/store/auth.selectors';
import { AppStateInterface } from '@app/shared/types/app-state.interface';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'mca-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss'],
})
export class FeedTogglerComponent implements OnInit {
  @Input('tagName') tagNameProps: string | null;

  isLoggedIn$: Observable<boolean | null>;

  constructor(private store$: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.valuesInit();
  }

  valuesInit(): void {
    this.isLoggedIn$ = this.store$.pipe(select(isLoggedInSelector));
  }
}
