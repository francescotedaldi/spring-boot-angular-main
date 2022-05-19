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
  changeDetection: ChangeDetectionStrategy.OnPush
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

  constructor() {


  }

  public ngOnInit(): void {
    this.timer = this.game.instance.time;
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
        this.pcfrontState[i][j] = 'waves'
        index++;
      }
    }
    this.userfrontState[7][0] = 'ship';
    this.userfrontState[1][0] = 'missed';
  }


}
