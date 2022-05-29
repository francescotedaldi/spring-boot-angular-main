import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BattleshipCell} from 'src/app/core/store/battleship/model/battleship-cell.model';
import {BattleshipGame} from 'src/app/core/store/battleship/model/battleship-game.model';
import {BattleshipCellAnimation} from '../../../../core/animations/battleship-cell-animation';
import {ModalBattleshipComponent} from '../../../../core/components/modals/modal-battleship/modal-battleship.component';
import {BattleColor} from '../../../../core/enums/battlecolor.enum';
import {BattleshipCellState} from '../../../../core/store/battleship/model/battleship-cell-state.enum';
import {BattleshipResult} from '../../../../core/store/battleship/model/battleship-result.enum';
import {RankUpdate} from "../../../../core/store/rank/model/rank-update.model";
import {GameType} from "../../../../core/enums/game-type.enum";

@Component({
  selector: 'app-battleship-game',
  templateUrl: './battleship-game.component.html',
  styleUrls: ['./battleship-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  animations: [BattleshipCellAnimation]
})
export class BattleshipGameComponent implements OnInit {
  
  @Input()
  public game: BattleshipGame;

  @Output()
  public back: EventEmitter<void> = new EventEmitter();
  @Output()
  public rank: EventEmitter<RankUpdate> = new EventEmitter<RankUpdate>();

  public userfrontState: string[][];
  public pcfrontState: string[][];
  public userbackState: BattleshipCellState[][];
  public pcbackState: BattleshipCellState[][];
  public moves: number;
  public canClick: boolean;
  public timeoutPC: number = 0;

  public result: typeof  BattleshipResult = BattleshipResult;
  public userCellHitted: number;
  public pcCellHitted: number;
  public maxCellToHit: number;

  public list: Set<[number, number]>;

  constructor(
    public readonly modalService: BsModalService,
    public readonly translateService: TranslateService
  ) {
  }

  public ngOnInit(): void {
    this.list = new Set<[number, number]>();
    this.canClick = true;
    this.userCellHitted = 0;
    this.pcCellHitted = 0;
    this.maxCellToHit = 30 ;
    this.moves = this.game.instance.moves;
    this.userfrontState = new Array(this.game.getDimension());
    this.pcfrontState = new Array(this.game.getDimension());
    this.pcbackState = new Array(this.game.getDimension());
    this.userbackState = new Array(this.game.getDimension());

    for (let i = 0; i < this.game.getDimension(); i++) {
      this.userfrontState[i] = new Array(this.game.getDimension());
      this.pcfrontState[i] = new Array(this.game.getDimension());
      this.pcbackState[i] = new Array((this.game.getDimension()));
      this.userbackState[i] = new Array((this.game.getDimension()));
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
        this.pcbackState[i][j] = BattleshipCellState.COVERED;
        this.userbackState[i][j] = BattleshipCellState.COVERED;
        index++;
      }
    }
  }

  public onClick(i: number, j: number): void  {
    if (this.canClick === false) {
      return;
    }
    if (this.game.instance.color === BattleColor.BLU &&  this.pcfrontState[i][j] !== 'waves_red') {
      return;
    }
    if (this.game.instance.color === BattleColor.ROSSO &&  this.pcfrontState[i][j] !== 'waves_blu') {
      return;
    }
    this.canClick = false;
    const cell: BattleshipCell = this.game.pccells[i][j];

    // VITTORIA AUTOMATICA al primo click, decommenta sotto
    // this.modalMessage('components.modals.battleship.win', this.result.WIN);
    // this.rank.emit({
    //   gameType: GameType.BATTLESHIP,
    //   instanceId: this.game.instance.id
    // });
    this.moves -= 1;
    if (cell.ship === true) {
      this.pcfrontState[i][j] = 'ship';
      this.pcCellHitted += 1;
      if (this.pcCellHitted === this.maxCellToHit) {
        this.modalMessage('components.modals.battleship.win', this.result.WIN);
        this.rank.emit({
          gameType: GameType.BATTLESHIP,
          instanceId: this.game.instance.id
        });
      }
    } else {
      this.pcfrontState[i][j] = 'missed';
    }

    this.pcbackState[i][j] = BattleshipCellState.VISIBLE;

    if (this.moves === 0) {
      this.modalMessage('components.modals.battleship.lose', this.result.LOSE);
    }
    setTimeout(() => { this.choisePc(); } , this.timeoutPC);
  }

  public choisePc(): void {
    // seleziona random una casella
    let i: number;
    let j: number;
    if (this.list.size === 0) {
      i = this.generateRandom(this.game.getDimension());
      j = this.generateRandom(this.game.getDimension());
    } else  {
      const iterator1 = this.list[Symbol.iterator]();
      const elem = iterator1.next();
      i = elem.value[0];
      j = elem.value[1];
      this.list.forEach((point: [number, number]) => {
        if (point[0] === i && point[1] === j) {
          this.list.delete(point);
        }
      });
    }

    if (this.game.instance.color === BattleColor.BLU &&  this.userfrontState[i][j] !== 'waves_blu') {
      this.choisePc();
    }
    if (this.game.instance.color === BattleColor.ROSSO &&  this.userfrontState[i][j] !== 'waves_red') {
      this.choisePc();
    }

    const cell: BattleshipCell = this.game.usercells[i][j];
    if (cell.ship === true) {
      this.userfrontState[i][j] = 'ship';
      this.userCellHitted += 1;
      this.listAux(i, j);
      if (this.userCellHitted === this.maxCellToHit) {
        this.modalMessage('components.modals.battleship.lose', this.result.LOSE);
      }
    } else {
      this.userfrontState[i][j] = 'missed';
    }
    this.userbackState[i][j] = BattleshipCellState.VISIBLE;
    this.canClick = true;
  }

  private listAux(i: number, j: number): void {
    if (i > 0) {
      if (this.game.instance.color === BattleColor.ROSSO && this.userfrontState[i - 1][j] === 'waves_red' ||
        this.game.instance.color === BattleColor.BLU && this.userfrontState[i - 1][j] === 'waves_blu') {
        this.list.add([i - 1, j]);
      }
    }
    if (i < 9) {
      if (this.game.instance.color === BattleColor.ROSSO && this.userfrontState[i + 1][j] === 'waves_red' ||
        this.game.instance.color === BattleColor.BLU && this.userfrontState[i + 1][j] === 'waves_blu') {
        this.list.add([i + 1, j]);
      }
    }
    if (j > 0) {
      if (this.game.instance.color === BattleColor.ROSSO && this.userfrontState[i][j - 1] === 'waves_red' ||
        this.game.instance.color === BattleColor.BLU && this.userfrontState[i][j - 1] === 'waves_blu') {
        this.list.add([i, j - 1]);
      }
    }
    if (j < 9) {
      if (this.game.instance.color === BattleColor.ROSSO && this.userfrontState[i][j + 1] === 'waves_red' ||
        this.game.instance.color === BattleColor.BLU && this.userfrontState[i][j + 1] === 'waves_blu') {
        this.list.add([i, j + 1]);
      }
    }
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
