import { VentuchatPage } from './app.po';

describe('ventuchat App', () => {
  let page: VentuchatPage;

  beforeEach(() => {
    page = new VentuchatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
