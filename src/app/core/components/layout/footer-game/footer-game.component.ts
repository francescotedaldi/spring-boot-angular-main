import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GameType} from '../../../enums/game-type.enum';

@Component({
  selector: 'app-footer-game',
  templateUrl: './footer-game.component.html',
  styleUrls: ['./footer-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterGameComponent implements OnInit {

  @Input()
  public gameType: GameType;

  public prefix: string;

  public ngOnInit(): void {
    this.prefix = this.gameType.toLowerCase();
  }

}
