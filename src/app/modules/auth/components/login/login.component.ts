import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loginAction } from '@app/modules/auth/store/actions/login.actions';
import {
  inProgressSelector,
  validationErrorsSelector,
} from '@app/modules/auth/store/auth.selectors';
import { LoginRequestInterface } from '@app/modules/auth/types/login-request.interface';
import { AppStateInterface } from '@app/shared/types/app-state.interface';
import { BackendErrorsInterface } from '@app/shared/types/backend-errors.interface';

@Component({
  selector: 'mca-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public inProgress$: Observable<boolean>;
  public backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(
    private fb: FormBuilder,
    private store$: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.formInit();
    this.valuesInit();
  }

  private valuesInit(): void {
    this.inProgress$ = this.store$.pipe(select(inProgressSelector));
    this.backendErrors$ = this.store$.pipe(select(validationErrorsSelector));
  }

  private formInit(): void {
    this.form = this.fb.group({
      email: '',
      password: '',
    });
  }

  public onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value,
    };
    this.store$.dispatch(loginAction({ request }));
  }
}
