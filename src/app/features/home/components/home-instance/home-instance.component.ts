import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ModalConfirmComponent} from '../../../../core/components/modals/modal-confirm/modal-confirm.component';
import {BattleshipInstance} from '../../../../core/store/battleship/model/battleship-instance.model';

@Component({
  selector: 'app-home-instance',
  templateUrl: './home-instance.component.html',
  styleUrls: ['./home-instance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomeInstanceComponent {
  @Input()
  public instances: BattleshipInstance[];
  @Output()
  public create: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  public play: EventEmitter<BattleshipInstance> = new EventEmitter<BattleshipInstance>();
  @Output()
  public edit: EventEmitter<BattleshipInstance> = new EventEmitter<BattleshipInstance>();
  @Output()
  public delete: EventEmitter<number> = new EventEmitter<number>();


  constructor(
    private readonly translate: TranslateService,
    private readonly modalService: BsModalService,
  ) { }

  public createHandler(): void {
    this.create.emit();
  }

  public playHandler(instance: BattleshipInstance): void {
    this.play.emit(instance);
  }

  public deleteHandler(id: number): void {
    const initialState = { message: this.translate.instant('features.battleship.settings.delete_message') };
    this.modalService.show(ModalConfirmComponent, {
      initialState
    }).content.onClose.subscribe(() => {
      this.delete.emit(id);
    });
  }

  public editHandler(instance: BattleshipInstance): void {
    this.edit.emit(instance);
  }

}
