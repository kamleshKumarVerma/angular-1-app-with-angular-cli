import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { KamleshAppComponent } from '../app/kamlesh.component';

beforeEachProviders(() => [KamleshAppComponent]);

describe('App: Kamlesh', () => {
  it('should create the app',
      inject([KamleshAppComponent], (app: KamleshAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'kamlesh works!\'',
      inject([KamleshAppComponent], (app: KamleshAppComponent) => {
    expect(app.title).toEqual('kamlesh works!');
  }));
});
