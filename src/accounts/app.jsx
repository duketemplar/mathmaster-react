/*
 * File contains App component. App component is connected with Redux store via connect() function and is exported as ConnectedApp.
 */

// imports component specific styles
import './_accounts.scss';

import React from 'react';

// imports connect() function from Redux that is used to connect App component with Redux store
// see https://github.com/rackt/react-redux#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
import { connect } from 'react-redux';

// imports component actions
import fetchAccounts from './actions/fetch-accounts';

// container component
import AccountsListContainer from './components/accounts-list-container';

// App component that wraps accounts container component and connects to Redux store.
class App extends React.Component {
  render() {
    return (
      <AccountsListContainer { ...this.props } />
    );
  }
}

/*
 * Ensures that component subscribes to Redux store updates. Any time Redux store is updated mapStateToProps is called.
 * Function should return plain object. Resulting object is merged into component props.
 * Therefore any time state changes, App component and all child components will get specified part of the state (state.accounts)
 * available via props - this.props.accounts.
 * If mapStateToProps is not defined then components will not be subscribed to Redux store updates.
 *
 * See https://github.com/rackt/react-redux#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
 */
function mapStateToProps(state) {
  return state.accounts;
}

/*
 * Returns an object that binds Redux dispatch to your application's actions.
 * Each property on resulting object becomes an action creator.
 * Object that is returned by mapDispatchToProps is merged into components props by Redux.
 * Therefore actions could be triggered as this.props.fetchAccounts().
 *
 * See https://github.com/rackt/react-redux#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
 */
function mapDispatchToProps(dispatch) {
  return {
    fetchAccounts: () => dispatch(fetchAccounts()),
  };
}

// connects App component to Redux store.
// App component is not modified. Instead new component that should be used is returned.
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

// exports ConnectedApp as default component that should be used
export default ConnectedApp;
