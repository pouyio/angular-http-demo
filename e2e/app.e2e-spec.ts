import { AngularHttpDemoPage } from './app.po';

describe('angular-http-demo App', () => {
  let page: AngularHttpDemoPage;

  beforeEach(() => {
    page = new AngularHttpDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
