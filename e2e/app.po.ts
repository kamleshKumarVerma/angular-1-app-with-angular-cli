export class KamleshPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('kamlesh-app h1')).getText();
  }
}
