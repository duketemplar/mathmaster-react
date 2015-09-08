import React from 'react';
import Account from './account';

class AccountsList extends React.Component {
  renderAccount(account) {
    return (
      <Account key={ 'key_' + account.accno } account={ account } />
    );
  }

  render() {
    const accounts = this.props.accounts.map(this.renderAccount);
    return (
      <ul>
        { accounts }
      </ul>
    );
  }
}

export default AccountsList;
