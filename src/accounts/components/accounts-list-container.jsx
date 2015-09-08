import React from 'react';

import AccountsList from './accounts-list';

class AccountsListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchAccounts();
  }

  render() {
    if (this.props.isFetching) {
      return (
        <div>Loading.. ({ this.context.translate('PRICE_LIST.HEADER') })</div>
      );
    }

    return (
      <AccountsList accounts={ this.props.accounts } />
    );
  }
}

AccountsListContainer.contextTypes = {
  translate: React.PropTypes.func.isRequired,
};

export default AccountsListContainer;
