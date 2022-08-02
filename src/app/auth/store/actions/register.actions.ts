import { RegisterRequestInterface } from '@app/auth/types/registerRequest.interface';
import { CurrentUserInterface } from '@app/shared/types/currentUser.interface';
import { createAction, props } from '@ngrx/store';

enum ActionTypes {
  REGISTER = '[AUTH] Register',
  REGISTER_SUCCESS = '[AUTH] Register success',
  REGISTER_FAILURE = '[AUTH] register failure',
}

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE);
