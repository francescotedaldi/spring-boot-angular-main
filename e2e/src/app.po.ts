import { browser, by, element } from 'protractor';
import {ANY} from '../../src/app/core/utils/any';

export class AppPage {

  public navigateTo(): Promise<ANY> {
    return browser.get(browser.baseUrl) as Promise<ANY>;
  }

  public getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
