import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/modules/auth/services/auth.service';
import { PersistenceService } from '@app/shared/services/persistence.service';
import { CurrentUserInterface } from '@app/shared/types/current-user.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '../actions/login.actions';

@Injectable()
export class LoginEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.set(
              environment.LS_AUTH_TOKEN_KEY,
              currentUser.token
            );
            return loginSuccessAction({ currentUser });
          }),
          catchError((httpErrorResponse: HttpErrorResponse) => {
            return of(
              loginFailureAction({ errors: httpErrorResponse.error.errors })
            );
          })
        );
      })
    );
  });

  redirectAfterRegisterSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => this.router.navigateByUrl('/'))
      ),
    { dispatch: false }
  );
}
