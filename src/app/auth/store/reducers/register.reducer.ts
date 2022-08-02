import { createReducer, on } from '@ngrx/store';

import { registerAction } from '@app/auth/store/actions/register.actions';
import { RegisterStateInterface } from '@app/auth/types/registerState.interface';

export const featureName = 'register';

const initialState: RegisterStateInterface = {
  inProgress: false,
};

export const reducer = createReducer(
  initialState,
  on(registerAction, (state) => ({
    ...state,
    inProgress: true,
  }))
);
