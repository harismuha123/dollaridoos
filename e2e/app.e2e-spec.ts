import { DollarsPage } from './app.po';

describe('dollars App', () => {
  let page: DollarsPage;

  beforeEach(() => {
    page = new DollarsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
