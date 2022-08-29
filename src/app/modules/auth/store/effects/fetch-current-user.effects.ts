import { Injectable } from '@angular/core';
import { AuthService } from '@app/modules/auth/services/auth.service';
import { PersistenceService } from '@app/shared/services/persistence.service';
import { CurrentUserInterface } from '@app/shared/types/current-user.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  fetchCurrentUserAction,
  fetchCurrentUserFailureAction,
  fetchCurrentUserSuccessAction,
} from '../actions/fetch-current-user.actions';

@Injectable()
export class FetchCurrentUserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService
  ) {}

  fetchCurrentUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchCurrentUserAction),
      switchMap(() => {
        const token = this.persistenceService.get(
          this.persistenceService.ACCESS_TOKEN_LC_KEY
        );
        if (!token) {
          return of(fetchCurrentUserFailureAction());
        }
        return this.authService.fetchCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return fetchCurrentUserSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(fetchCurrentUserFailureAction());
          })
        );
      })
    );
  });
}
