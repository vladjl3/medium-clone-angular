import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'mca-auth',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  public form = {} as FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.form = this.fb.group({
      username: '',
      email: '',
      password: '',
    });
  }

  public onSubmit(): void {
    console.log(this.form.value);
  }
}
