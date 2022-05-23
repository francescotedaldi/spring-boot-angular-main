import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { BattleshipGame } from 'src/app/core/store/battleship/model/battleship-game.model';
import { BattleshipCell } from 'src/app/core/store/battleship/model/battleship-cell.model';
// import {GameCategory} from '../../../../core/enums/game-category.enum';
// import {GameType} from '../../../../core/enums/game-type.enum';
import {ANY} from '../../../../core/utils/any';

@Component({
  selector: 'app-home-game',
  templateUrl: './home-game.component.html',
  styleUrls: ['./home-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeGameComponent implements OnInit {

  // private readonly configuration: Map<GameCategory, GameType[]> = new Map<GameCategory, GameType[]>();
  //
  // public categories: ANY[] = this.getEnum(GameCategory);
  // public selectedCategory: GameCategory;
  // public games: GameType[];
  @Input()
  public game: BattleshipGame;

  @Output()
  public back: EventEmitter<void> = new EventEmitter();

  public userfrontState: string[][];
  public pcfrontState: string[][];
  public timer: number;
  public canClick: boolean;
  public timeoutPC: number = 2000;

  public shipCellUser: [number, number][];
  public shipCellPc: [number, number][];

  constructor() {
  }

  public ngOnInit(): void {
    this.canClick = true;
    this.timer = this.game.instance.moves;
    this.userfrontState = new Array(this.game.getDimension());
    this.pcfrontState = new Array(this.game.getDimension());
    for (let i = 0; i < this.game.getDimension(); i++) {
      this.userfrontState[i] = new Array(this.game.getDimension());
      this.pcfrontState[i] = new Array(this.game.getDimension());
    }
    let index = 0;
    for (let i = 0; i < this.game.getDimension(); i++) {
      for (let j = 0; j < this.game.getDimension(); j++) {
        this.userfrontState[i][j] = 'waves';
        this.pcfrontState[i][j] = 'waves';
        // if (this.game.pccells[i][j].ship === true) {
        //   this.pcfrontState[i][j] = 'ship';
        // } else {
        //   this.pcfrontState[i][j] = 'missed';
        // }
        // if (this.game.usercells[i][j].ship === true) {
        //   this.userfrontState[i][j] = 'ship';
        // } else {
        //   this.userfrontState[i][j] = 'missed';
        // }
        index++;
      }
    }
  }

  public onClick(i: number, j: number): void  {
    if (this.canClick === false) {
      return;
    }
    this.canClick = false;
    const cell: BattleshipCell = this.game.pccells[i][j];

    if (cell.ship === true) {
      this.pcfrontState[i][j] = 'ship';
    } else {
      this.pcfrontState[i][j] = 'missed';
    }
    setTimeout(() => { this.choisePc(); } , 2000);
  }

  public choisePc(): void {
    // seleziona random una casella
    const i: number = this.generateRandom(this.game.getDimension());
    const j: number = this.generateRandom(this.game.getDimension());

    const cell: BattleshipCell = this.game.usercells[i][j];
    if (cell.ship === true) {
      this.userfrontState[i][j] = 'ship';
    } else {
      this.userfrontState[i][j] = 'missed';
    }
    this.canClick = true;
  }

  private generateRandom(i: number): number {
    return Math.floor(Math.round(Math.random() * 100) % i);
  }
}
