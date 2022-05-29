import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {CoreModule} from '../../core/core.module';
import {HomeGameComponent} from './components/home-game/home-game.component';
import {HomeLoginComponent} from './components/home-login/home-login.component';
import {HomeComponent} from './components/home.component';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
    declarations: [
        HomeComponent,
        HomeGameComponent,
        HomeLoginComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CoreModule,
        ReactiveFormsModule,
        TranslateModule
    ]
})
export class HomeModule { }
