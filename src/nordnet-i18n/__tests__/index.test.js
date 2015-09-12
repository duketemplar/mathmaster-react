import api from 'nordnet-next-api';
import { initialize, supportedLocales } from '../index';

describe('nordnet-i18n', () => {
  describe('initialize', () => {
    let sandbox;

    beforeEach(() => sandbox = sinon.sandbox.create());
    afterEach(() => sandbox.restore());

    beforeEach(() => {
      sandbox.stub(api, 'get', () => Promise.resolve({language: 'en', country: 'gb'}));
    });

    const element = {
      getAttribute: (key) => ({'data-lang': 'sv', 'data-country': 'SE'})[key],
    };

    it('resolves to the locale', (done) => {
      initialize(element).then((i18nData) => {
        expect(i18nData.locales[0]).to.equal('sv-SE');
        done();
      }, done).catch(done);
    });
  });

  describe('supportedLocales', () => {
    it('returns an array of supported locales', () => {
      expect(supportedLocales()).to.eql(['sv-SE', 'fi-FI', 'sv-FI', 'nb-NO', 'no-NO', 'nn-NO', 'da-DK', 'en']);
    });
  });
});
