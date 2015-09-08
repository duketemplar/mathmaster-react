import React from 'react/addons';
import AccountListContainer from '../accounts-list-container.jsx';

const TestUtils = React.addons.TestUtils;

describe('accounts.components.AccountListContainer', () => {
  let props;
  let context;
  let node;

  describe('when isFetching = false', () => {
    beforeEach(() => {
      context = { translate: () => 'yeah'};

      // This is also an example how to test React Context, this could probably be moved to the test helper
      const Wrapper = React.createClass({
        childContextTypes: {
          translate: React.PropTypes.func,
        },
        getChildContext: () => context,
        render() {
          return (<AccountListContainer {...props}/>);
        },
      });

      props = {
        isFetching: true,
        fetchAccounts: sinon.spy(),
      };

      const component = TestUtils.renderIntoDocument(<Wrapper/>);
      node = React.findDOMNode(component);
    });

    it('calls fetchAccounts on componentDidMount', () => expect(props.fetchAccounts).to.have.been.called);

    it('shows account name', () =>  expect(node.textContent).to.include('Loading.. (yeah)'));
  });
});
