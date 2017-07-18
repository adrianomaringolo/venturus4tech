import { VentuchatPage } from './app.po';

describe('ventuchat App', () => {
  let page: VentuchatPage;

  beforeEach(() => {
    page = new VentuchatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
