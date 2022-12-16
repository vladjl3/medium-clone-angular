import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { AppStateInterface } from '@app/shared/types/app-state.interface';
import { PopularTagType } from '@app/shared/types/popular-tag.type';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPopularTagsAction } from './store/actions/popular-tags.actions';
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from './store/popular-tags.selectors';

@Component({
  selector: 'mca-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularTagsComponent implements OnInit {
  @Input('apiEndpoint') apiEndpointProps: string;

  popularTags$: Observable<PopularTagType[] | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store$: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.fetchTags();
    this.valuesInit();
  }

  private valuesInit() {
    this.popularTags$ = this.store$.pipe(select(popularTagsSelector));
    this.isLoading$ = this.store$.pipe(select(isLoadingSelector));
    this.error$ = this.store$.pipe(select(errorSelector));
  }

  private fetchTags(): void {
    this.store$.dispatch(getPopularTagsAction());
  }
}
