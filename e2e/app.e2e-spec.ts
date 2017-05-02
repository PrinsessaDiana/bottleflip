import { BottleflipPage } from './app.po';

describe('bottleflip App', () => {
  let page: BottleflipPage;

  beforeEach(() => {
    page = new BottleflipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
