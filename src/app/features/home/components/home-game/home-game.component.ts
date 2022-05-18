import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { BattleshipGame } from 'src/app/core/store/battleship/model/battleship-game.model';
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

  constructor() {

   
  }

  public ngOnInit(): void {
    this.userfrontState = new Array(this.game.instance.columns);
    for (let i = 0; i < this.game.instance.columns; i++) {
      this.userfrontState[i] = new Array(this.game.instance.columns);
    }
    let index = 0;
    for (let i = 0; i < this.game.instance.columns; i++) {
      for (let j = 0; j < this.game.instance.columns; j++) {
        this.userfrontState[i][j] = 'sea';
        index++;
      }
    }

    console.log(this.game);
    
  }

  
}
