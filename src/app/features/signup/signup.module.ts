import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {CoreModule} from '../../core/core.module';
import {SignupComponent} from './components/signup.component';
import {SignupRoutingModule} from './signup-routing.module';

@NgModule({
    declarations: [
        SignupComponent
    ],
    imports: [
        CommonModule,
        SignupRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        CoreModule
    ]
})
export class SignupModule {
}
