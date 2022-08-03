import { BackendErrorsInterface } from '@app/shared/types/backendErrors.interface';
import { CurrentUserInterface } from '@app/shared/types/currentUser.interface';

export interface AuthStateInterface {
  inProgress: boolean;
  isLoggedIn: boolean | null;
  currentUser: CurrentUserInterface | null;
  validationErrors: BackendErrorsInterface | null;
}
