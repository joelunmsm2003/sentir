import { SentirPage } from './app.po';

describe('sentir App', function() {
  let page: SentirPage;

  beforeEach(() => {
    page = new SentirPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
