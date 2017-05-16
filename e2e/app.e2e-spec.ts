import { WypozyczalniaPage } from './app.po';

describe('wypozyczalnia App', function() {
  let page: WypozyczalniaPage;

  beforeEach(() => {
    page = new WypozyczalniaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
