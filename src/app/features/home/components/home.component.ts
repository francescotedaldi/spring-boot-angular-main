import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {AppState} from '../../../app-state';
// import {GameType} from '../../../core/enums/game-type.enum';
// import * as CoreActions from '../../../core/store/core/core.actions';
import {StorageService} from '../../../core/store/storage/services/storage.service';
import {Login} from '../../../core/store/user/model/login.model';
import {User} from '../../../core/store/user/model/user.model';
import * as UserActions from '../../../core/store/user/user.actions';
import * as UserSelector from '../../../core/store/user/user.selectors';
import {PageStatus} from "../../../core/enums/page-status.enum";
import {BattleshipInstance} from "../../../core/store/battleship/model/battleship-instance.model";
import * as BattleshipActions from '../../../core/store/battleship/battleship.actions';
import * as BattleshipSelectors from '../../../core/store/battleship/battleship.selectors';
import {Ack} from "../../../core/model/ack.model";
import {BattleshipGame} from "../../../core/store/battleship/model/battleship-game.model";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription = new Subscription();

  public loggedUser: User;
  public pageStatuses: typeof PageStatus = PageStatus;
  public pageStatus: PageStatus = PageStatus.LOBBY;
  public instances: BattleshipInstance[];
  public selectedInstance: BattleshipInstance;
  public game: BattleshipGame;

  constructor(
      private readonly storageService: StorageService,
      private readonly store: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.store.dispatch(BattleshipActions.getAllInstances());


    this.subscriptions.add(this.store.pipe(select(UserSelector.getUser)).subscribe((user: User) => {
      this.loggedUser = user;
    }));
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
  }

  public ngOnDestroy(): void {
    this.store.dispatch(BattleshipActions.clean());
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

  public backHandler(): void {
    this.store.dispatch(BattleshipActions.getAllInstances());
    this.selectedInstance = null;
    this.pageStatus = PageStatus.LOBBY;
  }
  public loginHandler(login: Login): void {
    this.store.dispatch(UserActions.login({ login }));
  }

}
