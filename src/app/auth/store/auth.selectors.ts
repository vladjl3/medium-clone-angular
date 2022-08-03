import { createSelector } from '@ngrx/store';

import { AppStateInterface } from '@app/shared/types/appState.interface';
import { AuthStateInterface } from '../types/authState.interface';

export const authFeatureSelector = (
  state: AppStateInterface
): AuthStateInterface => state.auth;

export const inProgressSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.inProgress
);
