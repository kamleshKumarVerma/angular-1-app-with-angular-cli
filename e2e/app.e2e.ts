import { KamleshPage } from './app.po';

describe('kamlesh App', function() {
  let page: KamleshPage;

  beforeEach(() => {
    page = new KamleshPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('kamlesh works!');
  });
});
