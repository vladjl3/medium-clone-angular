import { createSelector } from '@ngrx/store';

import { AppStateInterface } from '@app/shared/types/app-state.interface';
import { AuthStateInterface } from '../types/auth-state.interface';

export const authFeatureSelector = (
  state: AppStateInterface
): AuthStateInterface => state.auth;

export const inProgressSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.inProgress
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn
);

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn === false
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
);
