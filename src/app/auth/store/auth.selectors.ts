import { createSelector } from '@ngrx/store';

import { AppStateInterface } from '@app/shared/types/appState.interface';
import { AuthStateInterface } from '../types/authState.interface';

export const authFeatureSelector = (
  state: AppStateInterface
): AuthStateInterface => state.auth;

export const inProgressSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.inProgress
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
);
