import { ACCOUNTS_REQUEST } from '../action-types';
import fetchAccounts from '../fetch-accounts';

describe('accounts.actions.fetchAccounts', () => {
  it('dispatch an ACCOUNTS_REQUEST first', () => {
    const dispatch = sinon.spy();
    fetchAccounts()(dispatch);
    const expected = {type: ACCOUNTS_REQUEST};
    expect(dispatch).to.have.been.calledWith(expected);
  });

  //  it('does a request', () => {
  //    const dispatch = sinon.spy();
  //    fetchAccounts()(dispatch);
  //    const expected = {type: ACCOUNTS_REQUEST};
  //    expect(dispatch).to.have.been.calledWith(expected);
  //
  //  });
});
