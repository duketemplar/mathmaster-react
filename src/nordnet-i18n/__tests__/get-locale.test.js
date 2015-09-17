import '../initialize-intl';
import {createPromiseHelper} from 'test-helper';
import getLocale from '../get-locale';
import api from 'nordnet-next-api';

describe('getLocale', () => {
  describe('when data-lang and data-lang is given in element', () => {
    const promiseHelper = createPromiseHelper();
    let settled;

    beforeEach(() => {
      const element = {
        getAttribute: (key) => ({'data-lang': 'sv', 'data-country': 'SE'})[key],
      };
      const promise = getLocale(element);
      settled = promiseHelper.settle(promise);
    });

    it('successfully settles promise', () => expect(settled.success).to.be.true);

    it('returns a lang-country string', () => expect(settled.successValue).to.equal('sv-SE'));
  });

  describe('when data-lang is not given', () => {
    const promiseHelper = createPromiseHelper();
    let sandbox;
    let settled;

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
      sandbox.stub(api, 'get', () => Promise.resolve({data: {language: 'en', country: 'gb'}}));
    });

    afterEach(() => sandbox.restore());

    beforeEach(() => {
      const element = {
        getAttribute: (key) => ({})[key],
      };

      const promise = getLocale(element);
      settled = promiseHelper.settle(promise);
    });

    it('returns the locale', () => expect(settled.successValue).to.equal('en-gb'));

    it('successfully settles promise', () => expect(settled.success).to.be.true);

    it('uses /next/2/login', () => expect(api.get).to.have.been.calledWith('/next/2/login'));
  });
});

