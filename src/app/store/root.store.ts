import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
};
