import { LoginRequestInterface } from '@app/auth/types/loginRequest.interface';
import { BackendErrorsInterface } from '@app/shared/types/backend-errors.interface';
import { CurrentUserInterface } from '@app/shared/types/current-user.interface';
import { createAction, props } from '@ngrx/store';

enum ActionTypes {
  GET_CURRENT_USER = '[AUTH] Get current user',
  GET_CURRENT_USER_SUCCESS = '[AUTH] Get current user success',
  GET_CURRENT_USER_FAILURE = '[AUTH] Get current user failure',
}

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
);
