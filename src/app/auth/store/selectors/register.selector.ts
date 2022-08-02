import { RegisterStateInterface } from '@app/auth/types/registerState.interface';
import { AppStateInterface } from '@app/shared/types/appState.interface';
import { createSelector } from '@ngrx/store';

export const registerFeatureSelector = (
  state: AppStateInterface
): RegisterStateInterface => state.auth.register;

export const inProgressSelector = createSelector(
  registerFeatureSelector,
  (state: RegisterStateInterface) => state.inProgress
);
