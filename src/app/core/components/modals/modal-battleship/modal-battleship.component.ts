import {Component, OnDestroy, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {Subject} from 'rxjs';
import {BattleshipResult} from '../../../store/battleship/model/battleship-result.enum';

@Component({
  selector: 'app-modal-battleship',
  templateUrl: './modal-battleship.component.html',
  styleUrls: ['./modal-battleship.component.scss']
})
export class ModalBattleshipComponent implements OnInit, OnDestroy {
  public onClose: Subject<boolean>;

  public result: BattleshipResult;
  public results: typeof BattleshipResult = BattleshipResult;
  public title: string;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  public ngOnInit(): void {
    this.onClose = new Subject();
  }

  public ngOnDestroy(): void {
    this.onClose.next();
    this.onClose.unsubscribe();
  }
}
