import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {ModalModule, TooltipModule} from 'ngx-bootstrap';
import {AckComponent} from './components/layout/ack/ack.component';
import {FooterGameComponent} from './components/layout/footer-game/footer-game.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {MenuGameComponent} from './components/layout/menu-game/menu-game.component';
import {MenuComponent} from './components/layout/menu/menu.component';
import {RankComponent} from './components/layout/rank/rank.component';
import { ModalAboutUsComponent } from './components/modals/modal-about-us/modal-about-us.component';
import {ModalAlertComponent} from './components/modals/modal-alert/modal-alert.component';
import { ModalBattleshipComponent } from './components/modals/modal-battleship/modal-battleship.component';
import {ModalConfirmComponent} from './components/modals/modal-confirm/modal-confirm.component';
import {ModalRulesComponent} from './components/modals/modal-rules/modal-rules.component';
import {HasRoleDirective} from './directives/has-role.directive';
import {IsLoggedDirective} from './directives/is-logged.directive';
import {MmssPipe} from './pipe/mmss.pipe';

@NgModule({
  declarations: [
    MenuComponent,
    MenuGameComponent,
    FooterComponent,
    FooterGameComponent,
    RankComponent,
    AckComponent,
    IsLoggedDirective,
    HasRoleDirective,
    ModalRulesComponent,
    ModalAlertComponent,
    ModalConfirmComponent,
    ModalBattleshipComponent,
    MmssPipe,
    ModalAboutUsComponent,
  ],
  imports: [
    CommonModule,
    TooltipModule,
    TranslateModule,
    ModalModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    MenuGameComponent,
    FooterComponent,
    FooterGameComponent,
    RankComponent,
    AckComponent,
    IsLoggedDirective,
    HasRoleDirective,
    ModalRulesComponent,
    ModalAlertComponent,
    MmssPipe
  ],
  entryComponents: [
    ModalRulesComponent,
    ModalConfirmComponent,
    ModalAlertComponent,
    ModalBattleshipComponent,
    ModalAboutUsComponent
  ]
})
export class CoreModule {
}
