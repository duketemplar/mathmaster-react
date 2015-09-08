import React from 'react/addons';
import Account from '../account.jsx';
import {i18n} from 'nordnet-i18n';

const TestUtils = React.addons.TestUtils;

describe('accounts.components.Account', () => {
  let node;

  beforeEach(() => {
    const props = {
      messages: {
        PRICE_LIST: {
          PRICES: 'Mina priser',
        },
      },
      locales: ['en-US'],
      account: {
        alias: 'foo',
        accno: '123',
      },
    };

    // Sorry, far too much code here !
    // This is needed to setup the test object (component).
    // It injects contexts for both i18n and react routes.
    // TODO: this can probably be moved to the test-helper to be reused (but not before needed - YAGNI :)

    const I18nAccount = i18n(Account);

    // Now set up react context for react routes
    const context = {
      router: {
        makeHref() {},

        isActive() { return false; },
      },
    };

    const Wrapper = React.createClass({
      childContextTypes: {
        router: React.PropTypes.object,
      },
      getChildContext: () => context,
      render() {
        return (<I18nAccount {...props}/>);
      },
    });

    const component = TestUtils.renderIntoDocument(<Wrapper/>);
    node = React.findDOMNode(component);
  });

  it('translates PRICE_LIST.PRICES', () => expect(node.textContent).to.include('Mina priser'));

  it('shows account value', () => expect(node.textContent).to.include('100.00'));

  it('shows account name', () =>  expect(node.textContent).to.include('foo - 123'));
});
