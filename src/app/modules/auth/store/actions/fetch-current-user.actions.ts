import { CurrentUserInterface } from '@app/shared/types/current-user.interface';
import { createAction, props } from '@ngrx/store';

enum ActionTypes {
  FETCH_CURRENT_USER = '[AUTH] Fetch current user',
  FETCH_CURRENT_USER_SUCCESS = '[AUTH] Fetch current user success',
  FETCH_CURRENT_USER_FAILURE = '[AUTH] Fetch current user failure',
}

export const fetchCurrentUserAction = createAction(
  ActionTypes.FETCH_CURRENT_USER
);

export const fetchCurrentUserSuccessAction = createAction(
  ActionTypes.FETCH_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const fetchCurrentUserFailureAction = createAction(
  ActionTypes.FETCH_CURRENT_USER_FAILURE
);
