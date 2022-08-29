import { BackendErrorsInterface } from '@app/shared/types/backend-errors.interface';
import { CurrentUserInterface } from '@app/shared/types/current-user.interface';

export interface AuthStateInterface {
  inProgress: boolean;
  isFetchingCurrentUser: boolean;
  isLoggedIn: boolean | null;
  currentUser: CurrentUserInterface | null;
  validationErrors: BackendErrorsInterface | null;
}
