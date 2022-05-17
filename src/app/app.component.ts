import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {TranslateService} from '@ngx-translate/core';
import {BsLocaleService} from 'ngx-bootstrap';
import {Subscription} from 'rxjs';
import {AppState} from './app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private readonly subscriptions: Subscription = new Subscription();

  public mainClass: string;

  constructor(
      private readonly translate: TranslateService,
      private readonly localeService: BsLocaleService,
      private readonly store: Store<AppState>
  ) {
    // tslint:disable-next-line:no-string-literal
    const userLang = navigator.language || navigator['userLanguage'];
    const language = userLang.split('-')[0];

    this.translate.setDefaultLang('it'); // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.use(language); // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.localeService.use(language);
  }

  public ngOnInit(): void {
  }

}
