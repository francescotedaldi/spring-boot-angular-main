import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {CoreModule} from '../../core/core.module';
import {HomeGameComponent} from './components/home-game/home-game.component';
import {HomeLoginComponent} from './components/home-login/home-login.component';
import {HomeComponent} from './components/home.component';
import {HomeRoutingModule} from './home-routing.module';
import { HomeSettingsComponent } from './components/home-settings/home-settings.component';
import { HomeInstanceComponent } from './components/home-instance/home-instance.component';
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
    declarations: [
        HomeComponent,
        HomeGameComponent,
        HomeLoginComponent,
        HomeSettingsComponent,
        HomeInstanceComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CoreModule,
        ReactiveFormsModule,
        TranslateModule,
        NgSelectModule
    ]
})
export class HomeModule { }
