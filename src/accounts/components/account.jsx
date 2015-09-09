import React from 'react';
import { FormattedNumber } from 'react-intl';

class Account extends React.Component {
  render() {
    const alias = this.props.account.alias;
    const accno = this.props.account.accno;

    return (
      <li>
        <div>{ alias }</div>
        <div>{ this.context.getIntlMessage('ACCOUNTS.ACCOUNT_NUMBER') }: { accno }</div>
        <div>
          <FormattedNumber
            value='100'
            minimumFractionDigits='2'
            maximumFractionDigits='4' />
        </div>
      </li>
    );
  }
}

Account.contextTypes = {
  getIntlMessage: React.PropTypes.func.isRequired,
};

export default Account;
