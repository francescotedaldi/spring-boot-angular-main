import {browser, logging} from 'protractor';
import {dontWaitFor} from '../../src/app/core/utils/dont-wait-for.service';
import {AppPage} from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    dontWaitFor(page.navigateTo());
    dontWaitFor(expect(page.getTitleText()).toEqual('jgaming app is running!'));
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
