import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {ModalModule, TooltipModule} from 'ngx-bootstrap';
import {AckComponent} from './components/layout/ack/ack.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {MenuComponent} from './components/layout/menu/menu.component';
import {ModalAlertComponent} from './components/modals/modal-alert/modal-alert.component';
import {ModalConfirmComponent} from './components/modals/modal-confirm/modal-confirm.component';
import {IsLoggedDirective} from './directives/is-logged.directive';
import { ModalAboutUsComponent } from './components/modals/modal-about-us/modal-about-us.component';
import { ModalBattleshipComponent } from './components/modals/modal-battleship/modal-battleship.component';
// import {MmssPipe} from './pipe/mmss.pipe';

@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    AckComponent,
    IsLoggedDirective,
    ModalAlertComponent,
    ModalConfirmComponent,
    ModalAboutUsComponent,
    ModalBattleshipComponent,
    // MmssPipe
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
    FooterComponent,
    AckComponent,
    IsLoggedDirective,
    ModalAlertComponent,
    ModalAboutUsComponent,
    // MmssPipe
  ],
  entryComponents: [
    ModalConfirmComponent,
    ModalAlertComponent,
    ModalAboutUsComponent,
  ]
})
export class CoreModule {
}
