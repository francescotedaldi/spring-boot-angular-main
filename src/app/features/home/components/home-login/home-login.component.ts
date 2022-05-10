import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Login} from '../../../../core/store/user/model/login.model';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeLoginComponent implements OnInit {

  @Output()
  public login: EventEmitter<Login> = new EventEmitter<Login>();

  public form: FormGroup;
  public submitted: boolean;

  public ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  public loginHandler(): void {
    this.submitted = true;

    if (this.form.valid) {
      const loginData = this.form.value as Login;
      this.login.emit(loginData);
    }
  }

  // convenience getter for easy access to form fields
  public get f(): { [p: string]: AbstractControl } {
    return this.form.controls;
  }
}
