import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {TranslateService} from '@ngx-translate/core';
import {BsLocaleService} from 'ngx-bootstrap';
import {Subscription} from 'rxjs';
import {AppState} from '../../../../app-state';
import {User} from '../../../store/user/model/user.model';
import * as UserActions from '../../../store/user/user.actions';
import * as UserSelector from '../../../store/user/user.selectors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription = new Subscription();

  public readonly flags: string[] = ['it'];
  public loggedUser: User;

  constructor(
      private readonly translate: TranslateService,
      private readonly localeService: BsLocaleService,
      private readonly router: Router,
      private readonly store: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.subscriptions.add(this.store.pipe(select(UserSelector.getUser)).subscribe((user: User) => {
      this.loggedUser = user;
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public changeLanguageHandler(lang: string): void {
    this.translate.use(lang);
    this.localeService.use(lang);
  }

  public logoutHandler(): void {
    this.store.dispatch(UserActions.logout());
  }

}
