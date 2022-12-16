import { createSelector } from '@ngrx/store';

import { AppStateInterface } from '@app/shared/types/app-state.interface';
import { PopularTagsStateInterface } from '../types/popular-tags-state.interface';

export const popularTagsFeatureSelector = (
  state: AppStateInterface
): PopularTagsStateInterface => state.popularTags;

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (tagsState: PopularTagsStateInterface) => tagsState.isLoading
);

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (tagsState: PopularTagsStateInterface) => tagsState.data
);

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (tagsState: PopularTagsStateInterface) => tagsState.error
);
