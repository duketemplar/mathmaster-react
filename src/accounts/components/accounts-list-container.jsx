/*
 * File contains container React component. All React components are split up in two groups - container components and dummy components.
 * Container components are responsible for loading data and providing this data as props to dummy components. 
 * Container components are not responsible for rendering any of the data. They only render dummy components and provide them the data.
 *
 * See https://medium.com/@learnreact/container-components-c0e67432e005 for more details on container and dummy components approach.
 */

import React from 'react';

// importing dummy component that is responsible for rendering data
import AccountsList from './accounts-list';

/*
 * React container component class definition.
 * Container component is responsible for fetching data (accounts list) and passing it to dummy components for rendering.
 */
class AccountsListContainer extends React.Component {

  /*
   * Fires fetchAccounts action when component is mounted in the DOM.
   * Actions are bound to props via Redux connect() function. 
   * See app.jsx for more details on how actions are bound to props.
   */
  componentDidMount() {
    this.props.fetchAccounts();
  }

  /*
   * Renders current state of the application according to provided props and state.
   * render() function should be pure function, 
   * i.e. it should always return the same result given the same input - neither props nor state should ever be modified within render() function.
   */
  render() {
    // if current state is fetching (request to load accounts is in progress) then show spinner
    // this.context.getIntlMessage is the localization function that should be used to look up translations
    // translations are loaded from src/i18n folder
    if (this.props.isFetching) {
      return (
        <div>{ this.context.getIntlMessage('LOADING') }</div>
      );
    }

    // returns dummy component and provides loaded accounts array to it via props
    return (
      <AccountsList accounts={ this.props.accounts } />
    );
  }
}

// React context types that should be accessible within component
AccountsListContainer.contextTypes = {
  getIntlMessage: React.PropTypes.func.isRequired, // localization support, function that should be used to look up translations
};

// exporting React container element by default
export default AccountsListContainer;
