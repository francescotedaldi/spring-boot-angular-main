import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {AppState} from '../../../app-state';
import {GameType} from '../../../core/enums/game-type.enum';
import {PageStatus} from '../../../core/enums/page-status.enum';
import {Ack} from '../../../core/model/ack.model';
import * as BattleshipActions from '../../../core/store/battleship/battleship.actions';
import * as BattleshipSelectors from '../../../core/store/battleship/battleship.selectors';
import {BattleshipGame} from '../../../core/store/battleship/model/battleship-game.model';
import {BattleshipInstance} from '../../../core/store/battleship/model/battleship-instance.model';
import * as CoreActions from '../../../core/store/core/core.actions';
import {RankUpdate} from '../../../core/store/rank/model/rank-update.model';
import {Rank} from '../../../core/store/rank/model/rank.model';
import * as RankActions from '../../../core/store/rank/rank.actions';
import * as RankSelectors from '../../../core/store/rank/rank.selectors';

@Component({
  selector: 'app-battleship',
  templateUrl: './battleship.component.html',
  styleUrls: ['./battleship.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BattleshipComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription = new Subscription();

  public gameType: GameType = GameType.BATTLESHIP;
  public pageStatuses: typeof PageStatus = PageStatus;
  public pageStatus: PageStatus = PageStatus.LOBBY;
  public instances: BattleshipInstance[];
  public selectedInstance: BattleshipInstance;
  public game: BattleshipGame;
  public ranks: Rank[];

  constructor(
    private readonly router: Router,
    private readonly store: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.store.dispatch(CoreActions.changeGame({ gameType: this.gameType }));
    this.store.dispatch(BattleshipActions.getAllInstances());
    this.store.dispatch(RankActions.getAllRanks({ gameType: this.gameType }));
    this.subscriptions.add(this.store.pipe(select(BattleshipSelectors.getInstances)).subscribe((instances: BattleshipInstance[]) => {
      this.instances = instances;
    }));
    this.subscriptions.add(this.store.pipe(select(BattleshipSelectors.getGame)).subscribe((game: BattleshipGame) => {
      this.game = game;
      if (this.game) {
        this.pageStatus = PageStatus.GAME;
      }
    }));
    this.subscriptions.add(this.store.pipe(select(BattleshipSelectors.check)).subscribe((ack: Ack) => {
      if (ack && ack.result) {
        this.backHandler();
      }
    }));
    this.subscriptions.add(this.store.pipe(select(RankSelectors.getRanks)).subscribe((ranks: Rank[]) => {
      this.ranks = ranks;
    }));
  }

  public ngOnDestroy(): void {
    this.store.dispatch(BattleshipActions.clean());
    this.store.dispatch(RankActions.clean());
    this.subscriptions.unsubscribe();
  }

  public createInstanceHandler(): void {
    this.pageStatus = PageStatus.CONFIGURATION;
  }

  public editInstanceHandler(instance: BattleshipInstance): void {
    this.selectedInstance = instance;
    this.pageStatus = PageStatus.CONFIGURATION;
  }

  public deleteInstanceHandler(instanceId: number): void {
    this.store.dispatch(BattleshipActions.deleteInstance({ instanceId }));
  }

  public saveInstanceHandler(instance: BattleshipInstance): void {
    this.store.dispatch(BattleshipActions.saveInstance({ instance }));
  }

  public playInstanceHandler(instance: BattleshipInstance): void {
    this.store.dispatch(BattleshipActions.getGame({ instance }));
  }

  public updateRankHandler(rankUpdateData: RankUpdate): void {
    this.store.dispatch(RankActions.saveRank({ rankUpdate: rankUpdateData }));
  }

  public backHandler(): void {
    this.store.dispatch(BattleshipActions.getAllInstances());
    this.store.dispatch(RankActions.getAllRanks({ gameType: this.gameType }));
    this.selectedInstance = null;
    this.pageStatus = PageStatus.LOBBY;
  }

}
