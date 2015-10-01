import React from 'react/addons';
import {i18n} from 'nordnet-i18n';
import AccountList from '../accounts-list';

const TestUtils = React.addons.TestUtils;

describe('accounts.components.AccountList', () => {
  let node;

  const messages = {
    ACCOUNTS: {
      ACCOUNT_NUMBER: 'Account',
    },
  };

  function createComponent(Component, props) {
    return TestUtils.renderIntoDocument(React.createElement(i18n(Component), props));
  }

  beforeEach(() => {
    const props = {
      messages,
      formats: {}, // TODO
      locales: [],
      accounts: [{accno: 111, alias: 'account one'}, {accno: 222, alias: 'account two'}],
    };
    const component = createComponent(AccountList, props);
    node = React.findDOMNode(component);
  });

  it('can render two accounts', () => {
    expect(node.textContent).to.include('account one');
    expect(node.textContent).to.include('account two');
  });
});
