import { createReducer, on } from '@ngrx/store';

import { AuthStateInterface } from '@app/auth/types/authState.interface';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.actions';

export const featureName = 'auth';

const initialState: AuthStateInterface = {
  inProgress: false,
  isLoggedIn: null,
  currentUser: null,
  validationErrors: null,
};

export const reducer = createReducer(
  initialState,
  on(registerAction, (state) => ({
    ...state,
    inProgress: true,
    validationErrors: null,
  })),
  on(registerSuccessAction, (state, action) => ({
    ...state,
    inProgress: false,
    currentUser: action.currentUser,
  })),
  on(registerFailureAction, (state, action) => ({
    ...state,
    inProgress: false,
    validationErrors: action.errors,
  }))
);
