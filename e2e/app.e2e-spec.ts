import { FIRSTPROJPage } from './app.po';

describe('firstproj App', () => {
  let page: FIRSTPROJPage;

  beforeEach(() => {
    page = new FIRSTPROJPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
