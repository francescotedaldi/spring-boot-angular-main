import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app-state';
import {User} from '../../../core/store/user/model/user.model';
import * as UserActions from '../../../core/store/user/user.actions';
import {dontWaitFor} from '../../../core/utils/dont-wait-for.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;
  public submitted: boolean;

  constructor(
      private readonly router: Router,
      private readonly store: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      presentation: new FormControl(null)
    });
  }

  public registerHandler(): void {
    this.submitted = true;

    if (this.form.valid) {
      const user = { ...this.form.value as User };
      this.store.dispatch(UserActions.saveUser({user }));
      dontWaitFor(this.router.navigate(['']));
    }
  }

  // convenience getter for easy access to form fields
  public get f(): { [p: string]: AbstractControl } {
    return this.form.controls;
  }

}
