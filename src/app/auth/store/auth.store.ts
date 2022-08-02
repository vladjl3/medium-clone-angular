import * as fromRegister from './reducers/register.reducer';

export const featureName = 'auth';

export const reducers = {
  [fromRegister.featureName]: fromRegister.reducer,
};
