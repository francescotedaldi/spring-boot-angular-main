import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
// import {GameCategory} from '../../../../core/enums/game-category.enum';
// import {GameType} from '../../../../core/enums/game-type.enum';
import {ANY} from '../../../../core/utils/any';

@Component({
  selector: 'app-home-game',
  templateUrl: './home-game.component.html',
  styleUrls: ['./home-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeGameComponent {

  // private readonly configuration: Map<GameCategory, GameType[]> = new Map<GameCategory, GameType[]>();
  //
  // public categories: ANY[] = this.getEnum(GameCategory);
  // public selectedCategory: GameCategory;
  // public games: GameType[];
  @Output()
  public back: EventEmitter<void> = new EventEmitter();

  constructor() {
    // this.configuration.set(GameCategory.ALL, [ GameType.MEMORY, GameType.MINEFIELD, GameType.LUCANUM ]);
    // this.configuration.set(GameCategory.CARDS, [ ]);
    // this.configuration.set(GameCategory.PUZZLE, [ GameType.MEMORY, GameType.MINEFIELD ]);
    // this.configuration.set(GameCategory.IDLE, [  ]);
    // this.configuration.set(GameCategory.TABLE, [ GameType.LUCANUM ]);
    // this.filterHandler(GameCategory.ALL);
  }

  // public filterHandler(category: GameCategory): void {
  //   this.selectedCategory = category;
  //   this.games = this.configuration.get(category);
  // }
  //
  // public getEnum(obj: ANY): ANY[] {
  //   return Object.keys(obj).filter((k: ANY) => typeof obj[k as ANY] !== 'number');
  // }
}
