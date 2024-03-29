import { createReducer, on } from '@ngrx/store';

import { AuthStateInterface } from '@app/modules/auth/types/auth-state.interface';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.actions';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from './actions/login.actions';
import {
  fetchCurrentUserAction,
  fetchCurrentUserFailureAction,
  fetchCurrentUserSuccessAction,
} from './actions/fetch-current-user.actions';

export const featureName = 'auth';

const initialState: AuthStateInterface = {
  inProgress: false,
  isFetchingCurrentUser: false,
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
  })),
  on(loginAction, (state) => ({
    ...state,
    inProgress: true,
    validationErrors: null,
  })),
  on(loginSuccessAction, (state, action) => ({
    ...state,
    inProgress: false,
    currentUser: action.currentUser,
    isLoggedIn: true,
  })),
  on(loginFailureAction, (state, action) => ({
    ...state,
    inProgress: false,
    validationErrors: action.errors,
  })),
  on(fetchCurrentUserAction, (state) => ({
    ...state,
    isFetchingCurrentUser: true,
  })),
  on(fetchCurrentUserSuccessAction, (state, action) => ({
    ...state,
    isFetchingCurrentUser: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),
  on(fetchCurrentUserFailureAction, (state) => ({
    ...state,
    isFetchingCurrentUser: false,
    isLoggedIn: false,
    currentUser: null,
  }))
);
