import { createAction, props } from '@ngrx/store';
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';

export enum ActionTypes {
  GET_FEED = '[FEED] Get feed',
  GET_FEED_SUCCESS = '[FEED] Get feed success',
  GET_FEED_FAILURE = '[FEED] Get feed failure',
}

export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{ url: string }>()
);

export const getFeedSuccessAction = createAction(
  ActionTypes.GET_FEED,
  props<{ feed: GetFeedResponseInterface }>()
);

export const getFeedFailureAction = createAction(ActionTypes.GET_FEED);
