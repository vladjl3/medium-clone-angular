import { RegisterRequestInterface } from '@app/auth/types/registerRequest.interface';
import { BackendErrorsInterface } from '@app/shared/types/backend-errors.interface';
import { CurrentUserInterface } from '@app/shared/types/current-user.interface';
import { createAction, props } from '@ngrx/store';

enum ActionTypes {
  REGISTER = '[AUTH] Register',
  REGISTER_SUCCESS = '[AUTH] Register success',
  REGISTER_FAILURE = '[AUTH] Register failure',
}

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
