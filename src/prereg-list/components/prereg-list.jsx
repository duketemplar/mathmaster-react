import React from 'react';

class PreregList extends React.Component {

  /*
   * Returns React component for given account.
   */
  renderAccount(account) {
    // always set "key" property on those components that are part of an array
    // each key should be unique and constant for given component that they identify
    // see more on key in React documentation - https://facebook.github.io/react/docs/multiple-components.html#dynamic-children
    return (
      <div >some list</div>
    );
  }

  render() {
    // maps accounts from properties to Account React components that should be rendered
    const accounts = this.props.accounts.map(this.renderAccount);
    return (
      <ul className='accounts-list'>
        { accounts }
      </ul>
    );
  }
}

/*
 * Prop type validation
 * You can here see what the component needs.
 * If the component does not get what it needs a warning will be displayed in the console
 * See https://facebook.github.io/react/docs/reusable-components.html
 */
/*AccountsList.propTypes = {
  accounts: React.PropTypes.array.isRequired,
};*/

// exports default React component
export default PreregList;