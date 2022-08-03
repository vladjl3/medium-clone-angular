import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from '@app/auth/store/actions/register.actions';
import { inProgressSelector } from '@app/auth/store/auth.selectors';
import { RegisterRequestInterface } from '@app/auth/types/registerRequest.interface';
import { AppStateInterface } from '@app/shared/types/appState.interface';

@Component({
  selector: 'mca-auth',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public inProgress$: Observable<boolean>;

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
