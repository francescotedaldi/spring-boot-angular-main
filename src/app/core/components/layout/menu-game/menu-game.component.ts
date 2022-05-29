import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {GameType} from '../../../enums/game-type.enum';
import {ModalRulesComponent} from '../../modals/modal-rules/modal-rules.component';

@Component({
  selector: 'app-menu-game',
  templateUrl: './menu-game.component.html',
  styleUrls: ['./menu-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuGameComponent {

  @Input()
  public hideHome: boolean;
  @Input()
  public gameType: GameType;

  constructor(
      public readonly modalService: BsModalService,
      public readonly translateService: TranslateService
  ) { }

  public rulesHandler(): BsModalRef {
    const initialState = { currentGameType: this.gameType };
    return this.modalService.show(ModalRulesComponent, {
      initialState,
      class: 'modal-lg'
    });
  }
}
