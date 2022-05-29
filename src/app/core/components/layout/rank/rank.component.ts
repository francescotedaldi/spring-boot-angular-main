import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Rank} from '../../../store/rank/model/rank.model';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RankComponent {

  @Input()
  public ranks: Rank[];

}
