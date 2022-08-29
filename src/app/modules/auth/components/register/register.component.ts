import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from '@app/modules/auth/store/actions/register.actions';
import {
  inProgressSelector,
  validationErrorsSelector,
} from '@app/modules/auth/store/auth.selectors';
import { RegisterRequestInterface } from '@app/modules/auth/types/register-request.interface';
import { AppStateInterface } from '@app/shared/types/app-state.interface';
import { BackendErrorsInterface } from '@app/shared/types/backend-errors.interface';

@Component({
  selector: 'mca-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
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
      username: '',
      email: '',
      password: '',
    });
  }

  public onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };
    this.store$.dispatch(registerAction({ request }));
  }
}
