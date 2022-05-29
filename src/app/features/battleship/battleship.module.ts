import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {TranslateModule} from '@ngx-translate/core';
import {CoreModule} from '../../core/core.module';
import {BattleshipRoutingModule} from './battleship-routing.module';
import {BattleshipGameComponent} from './components/battleship-game/battleship-game.component';
import {BattleshipInstancesComponent} from './components/battleship-instances/battleship-instances.component';
import {BattleshipSettingsComponent} from './components/battleship-settings/battleship-settings.component';
import {BattleshipComponent} from './components/battleship.component';

@NgModule({
  declarations: [
    BattleshipComponent,
    BattleshipSettingsComponent,
    BattleshipInstancesComponent,
    BattleshipGameComponent
  ],
  imports: [
        CoreModule,
        CommonModule,
        BattleshipRoutingModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NgSelectModule
    ]
})
export class BattleshipModule {
}
