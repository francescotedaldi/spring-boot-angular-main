import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BattleshipGame} from 'src/app/core/store/battleship/model/battleship-game.model';
import {BattleshipCell} from 'src/app/core/store/battleship/model/battleship-cell.model';
import {BattleshipResult} from "../../../../core/store/battleship/model/battleship-result.enum";
import {BsModalService} from "ngx-bootstrap/modal";
import {TranslateService} from "@ngx-translate/core";
import {ModalBattleshipComponent} from "../../../../core/components/modals/modal-battleship/modal-battleship.component";
import {BattleColor} from "../../../../core/enums/battlecolor.enum";

@Component({
  selector: 'app-home-game',
  templateUrl: './home-game.component.html',
  styleUrls: ['./home-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeGameComponent implements OnInit {

  @Input()
  public game: BattleshipGame;

  @Output()
  public back: EventEmitter<void> = new EventEmitter();

  public userfrontState: string[][];
  public pcfrontState: string[][];
  public moves: number;
  public canClick: boolean;
  public timeoutPC: number = 0;

  public result: typeof  BattleshipResult = BattleshipResult;
  public userCellHitted: number;
  public pcCellHitted: number;
  public maxCellToHit: number;

  constructor(
    public readonly modalService: BsModalService,
    public readonly translateService: TranslateService
  ) {
  }

  public ngOnInit(): void {
    this.canClick = true;
    this.userCellHitted = 0;
    this.pcCellHitted = 0;
    this.maxCellToHit = 30;
    this.moves = this.game.instance.moves;
    this.userfrontState = new Array(this.game.getDimension());
    this.pcfrontState = new Array(this.game.getDimension());
    for (let i = 0; i < this.game.getDimension(); i++) {
      this.userfrontState[i] = new Array(this.game.getDimension());
      this.pcfrontState[i] = new Array(this.game.getDimension());
    }
    let index = 0;
    for (let i = 0; i < this.game.getDimension(); i++) {
      for (let j = 0; j < this.game.getDimension(); j++) {
        if (this.game.instance.color === BattleColor.BLU) {
          this.userfrontState[i][j] = 'waves_blu';
          this.pcfrontState[i][j] = 'waves_red';
        } else {
          this.userfrontState[i][j] = 'waves_red';
          this.pcfrontState[i][j] = 'waves_blu';
        }
        index++;
      }
    }
  }

  public onClick(i: number, j: number): void  {
    if (this.canClick === false) {
      return;
    }
    if (this.game.instance.color === BattleColor.BLU &&  this.pcfrontState[i][j] !== "waves_red") {
      return;
    }
    if (this.game.instance.color === BattleColor.ROSSO &&  this.pcfrontState[i][j] !== "waves_blu") {
      return;
    }
    this.canClick = false;
    const cell: BattleshipCell = this.game.pccells[i][j];

    this.moves -= 1;
    if (cell.ship === true) {
      this.pcfrontState[i][j] = 'ship';
      this.pcCellHitted += 1;
      if (this.pcCellHitted === this.maxCellToHit) {
        this.modalMessage('components.modals.battleship.win', this.result.WIN);
      }
    } else {
      this.pcfrontState[i][j] = 'missed';
    }

    if (this.moves === 0) {
      this.modalMessage('components.modals.battleship.lose', this.result.LOSE);
    }
    setTimeout(() => { this.choisePc(); } , this.timeoutPC);
  }

  public choisePc(): void {
    // seleziona random una casella
    const i: number = this.generateRandom(this.game.getDimension());
    const j: number = this.generateRandom(this.game.getDimension());

    const cell: BattleshipCell = this.game.usercells[i][j];
    if (cell.ship === true) {
      this.userfrontState[i][j] = 'ship';
      this.userCellHitted += 1;
      if (this.userCellHitted === this.maxCellToHit) {
        this.modalMessage('components.modals.battleship.lose', this.result.LOSE);
      }
    } else {
      this.userfrontState[i][j] = 'missed';
    }
    this.canClick = true;
  }

  private generateRandom(i: number): number {
    return Math.floor(Math.round(Math.random() * 100) % i);
  }
  private modalMessage(title: string, result: BattleshipResult): void {
    const currentTitle = this.translateService.instant(title);
    const currentResult = this.translateService.instant(result);
    const initialState = { title: currentTitle, result: currentResult };
    const bsModalRef = this.modalService.show(ModalBattleshipComponent, {
      initialState
    });
    bsModalRef.content.onClose.subscribe(() => {
      this.back.emit();
    });
  }
}
