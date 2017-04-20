import { Lab13AssingmentPage } from './app.po';

describe('lab13-assingment App', () => {
  let page: Lab13AssingmentPage;

  beforeEach(() => {
    page = new Lab13AssingmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
