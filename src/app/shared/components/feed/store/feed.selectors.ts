import { createSelector } from '@ngrx/store';

import { AppStateInterface } from '@app/shared/types/app-state.interface';
import { FeedStateInterface } from '../types/feed-state.interface';

export const feedFeatureSelector = (
  state: AppStateInterface
): FeedStateInterface => state.feed;

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.isLoading
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.data
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.error
);
