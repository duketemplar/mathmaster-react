import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import fetchAccounts from '../actions/fetch-accounts';
import accountsReducer from '../reducers/accounts';
import {createPromiseHelper} from 'test-helper';
import api from 'nordnet-next-api';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware // lets us dispatch() functions
//  loggerMiddleware // neat middleware that logs actions
)(createStore);

const store = createStoreWithMiddleware(accountsReducer);

describe('accounts.states', () => {
  const promiseHelper = createPromiseHelper();

  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(api, 'get', () => Promise.resolve({data: 'some accounts'}));
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('when successful fetch', () => {
    let stateChanges;
    let unsubscribe;

    beforeEach(() => {
      stateChanges = [];
      unsubscribe = store.subscribe(() => stateChanges.push(store.getState()));
      const promise = store.dispatch(fetchAccounts());
      promiseHelper.settle(promise);
    });

    afterEach(() => unsubscribe());

    const EXPECTED_STATE_CHANGES = [
      { isFetching: true, accounts: []},
      { isFetching: false, accounts: 'some accounts'},
    ];

    EXPECTED_STATE_CHANGES.forEach((expectedState, index) => {
      it('has correct state change number: ' + (index + 1), () => {
        expect(stateChanges[index]).to.eql(expectedState);
      });
    });
  });
});
