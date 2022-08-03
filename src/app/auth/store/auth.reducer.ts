import { createReducer, on } from '@ngrx/store';

import { AuthStateInterface } from '@app/auth/types/authState.interface';
import { registerAction } from './actions/register.actions';

export const featureName = 'auth';

const initialState: AuthStateInterface = {
  inProgress: false,
  isLoggedIn: false,
  currentUser: null,
  validationErrors: null,
};

export const reducer = createReducer(
  initialState,
  on(registerAction, (state) => ({
    ...state,
    inProgress: true,
  }))
);
