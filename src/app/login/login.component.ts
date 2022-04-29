import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public submitted: boolean;

  constructor() {
    this.submitted = false;
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
  public ngOnInit(): void {
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
  }

  // convenience getter for easy access to form fields
  public get f(): { [p: string]: AbstractControl } {
    return this.form.controls;
  }
}
