import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppStateInterface } from '@app/shared/types/app-state.interface';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
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
  limit: number = environment.limit;
  baseUrl: string;
  queryParamsSubscription: Subscription;
  currentPage: number;

  constructor(
    private store$: Store<AppStateInterface>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listenersInit();
    this.valuesInit();
    this.dataFetch();
  }

  private valuesInit(): void {
    this.isLoading$ = this.store$.pipe(select(isLoadingSelector));
    this.error$ = this.store$.pipe(select(errorSelector));
    this.feed$ = this.store$.pipe(select(feedSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  private listenersInit(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1');
        console.log(this.currentPage);
      }
    );
  }

  private dataFetch(): void {
    this.store$.dispatch(getFeedAction({ url: this.apiEndpointProps }));
  }
}
