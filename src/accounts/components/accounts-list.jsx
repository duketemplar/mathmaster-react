/*
 * File contains AccountsList dummy component.
 *
 * Dummy components are responsible for rendering the data. All the data for rendering should be provided by container components.
 * Dummy components should not know anything about stores, actions or API interactions.
 *
 * See https://medium.com/@learnreact/container-components-c0e67432e005 for more details on container and dummy components approach.
 */
import React from 'react';

// imports Account component
import Account from './account';

/*
 * React dummy component class definition.
 * From pure React perspective class definitions for dummy and container components are no different.
 * The main differences between dummy and container components are in their implementation and how they interact with the rest of the application.
 */
class AccountsList extends React.Component {

  /*
   * Returns React component for given account.
   */
  renderAccount(account) {
    // always set "key" property on those components that are part of an array
    // each key should be unique and constant for given component that they identify
    // see more on key in React documentation - https://facebook.github.io/react/docs/multiple-components.html#dynamic-children
    return (
      <Account key={ 'key_' + account.accno } account={ account } />
    );
  }

  render() {
    // maps accounts from properties to Account React components that should be rendered
    const accounts = this.props.accounts.map(this.renderAccount);
    return (
      <ul>
        { accounts }
      </ul>
    );
  }
}

// exports default React component
export default AccountsList;
