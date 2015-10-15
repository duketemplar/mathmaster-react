/*
 * File contains actions and action creators.
 *
 * Actions are payloads of information that send data from your application to your store.
 * They are the only source of information for the store. You send them to the store using store.dispatch().
 *
 * Action creators are pure functions that create actions.
 *
 * See http://rackt.github.io/redux/docs/basics/Actions.html for more details on actions and action creators.
 */

import api from 'nordnet-next-api';

// imports action types
import {
  PREREG_LIST_REQUEST,
  PREREG_LIST_REQUEST_SUCCESS,
  PREREG_LIST_REQUEST_FAILURE,
} from './action-types';

/*
 * Action creator that returns action (payload) for ACCOUNTS_REQUEST action type.
 */
function requestPreregAccounts() {
  return {
    type: PREREG_LIST_REQUEST,
  };
}

/*
 * Action creator that returns action (payload) for ACCOUNTS_REQUEST_SUCCESS action type.
 */
function requestPreregAccountsSuccess(data) {
  return {
    type: PREREG_LIST_REQUEST_SUCCESS,
    data,
  };
}

/*
 * Action creator that returns action (payload) for ACCOUNTS_REQUEST_FAILURE action type.
 */
function requestPreregAccountsFailure(data) {
  return {
    type: PREREG_LIST_REQUEST_FAILURE,
    data,
  };
}



/*
 * Exports async action creator. Async action creators are returning a function instead of a plain object (compare e.g. to requestAccounts).
 * By using specific middleware action creators can return a function instead of a plain object. In this case redux-thunk middleware is used later on
 * to allow returning of functions for async actions.
 *
 * Function that is retunred by this async action creator is executed by redux-thunk middleware. Returned function is allowed to have side effects,
 * including asynchronous API calls. This function can also dispatch synchronous actions (e.g. requestAccountsSuccess).
 *
 * See http://rackt.github.io/redux/docs/advanced/AsyncActions.html#async-action-creators for more details on async action creators.
 * See https://github.com/gaearon/redux-thunk for more details on redux-thunk.
 */
export default function fetchAccounts() {
  return (dispatch) => {
    dispatch(requestPreregAccounts());
    return api.get('/next/2/prereg/accounts').then(
        ({ data }) => dispatch(requestPreregAccountsSuccess(data)),
        ({ data }) => dispatch(requestPreregAccountsFailure(data)));
  };
}
