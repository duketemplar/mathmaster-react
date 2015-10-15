import React from 'react';
// importing dummy component that is responsible for rendering data
import PreregList from './prereg-list';

import { translatable } from 'nordnet-i18n';
/*
 * React container component class definition.
 * Container component is responsible for fetching data (accounts list) and passing it to dummy components for rendering.
 */
class PreregListContainer extends React.Component {

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
        <div>'LOADING'</div>
      );
    }

    // returns dummy component and provides loaded accounts array to it via props
    return (
      <PreregList accounts={ this.props.accounts } />
    );
  }
}

/*
 * Prop type validation
 * You can here see what the component needs.
 * If the component does not get what it needs a warning will be displayed in the console
 * See https://facebook.github.io/react/docs/reusable-components.html
 */


// exporting React container element by default
export default translatable(PreregListContainer);
