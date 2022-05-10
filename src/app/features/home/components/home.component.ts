import {Component, OnInit} from '@angular/core';
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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private readonly subscriptions: Subscription = new Subscription();

  public loggedUser: User;

  constructor(
      private readonly storageService: StorageService,
      private readonly store: Store<AppState>
  ) { }

  public ngOnInit(): void {
    // this.store.dispatch(CoreActions.changeGame({ gameType: GameType.HOME }));

    this.subscriptions.add(this.store.pipe(select(UserSelector.getUser)).subscribe((user: User) => {
      this.loggedUser = user;
    }));
  }

  public loginHandler(login: Login): void {
    this.store.dispatch(UserActions.login({ login }));
  }

}
