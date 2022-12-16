import { PopularTagType } from '@app/shared/types/popular-tag.type';
import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  GET_POPULAR_TAGS = '[TAGS] Get popular tags',
  GET_POPULAR_TAGS_SUCCESS = '[TAGS] Get popular tags success',
  GET_POPULAR_TAGS_FAILURE = '[TAGS] Get popular tags failure',
}

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS);

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ tags: PopularTagType[] }>()
);

export const getPopularTagsFailureAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
);
