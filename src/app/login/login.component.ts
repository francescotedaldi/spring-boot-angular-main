import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output()
  public login: EventEmitter<Login> = new EventEmitter<Login>();

  public form: FormGroup;
  public submitted: boolean;
  public ngOnInit(): void {
    this.submitted = false;
    this.buildForm();
  }

  public buildForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  public loginHandler(): void{
    this.submitted = true;
    console.log('login: loginHandler: submitted = true;', this.form);
   
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
