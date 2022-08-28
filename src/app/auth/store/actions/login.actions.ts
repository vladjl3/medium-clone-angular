import { LoginRequestInterface } from '@app/auth/types/loginRequest.interface';
import { BackendErrorsInterface } from '@app/shared/types/backend-errors.interface';
import { CurrentUserInterface } from '@app/shared/types/current-user.interface';
import { createAction, props } from '@ngrx/store';

enum ActionTypes {
  LOGIN = '[AUTH] Login',
  LOGIN_SUCCESS = '[AUTH] Login success',
  LOGIN_FAILURE = '[AUTH] Login failure',
}

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
