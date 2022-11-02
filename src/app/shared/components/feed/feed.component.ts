import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { AppStateInterface } from '@app/shared/types/app-state.interface';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getFeedAction } from './store/actions/get-feed.actions';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from './store/feed.selectors';
import { GetFeedResponseInterface } from './types/get-feed-response.interface';

@Component({
  selector: 'mca-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit {
  @Input('apiEndpoint') apiEndpointProps: string;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<GetFeedResponseInterface | null>;

  constructor(private store$: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.valuesInit();
    this.dataFetch();
  }

  private valuesInit(): void {
    this.isLoading$ = this.store$.pipe(select(isLoadingSelector));
    this.error$ = this.store$.pipe(select(errorSelector));
    this.feed$ = this.store$.pipe(select(feedSelector));
  }

  private dataFetch(): void {
    this.store$.dispatch(getFeedAction({ url: this.apiEndpointProps }));
  }
}
