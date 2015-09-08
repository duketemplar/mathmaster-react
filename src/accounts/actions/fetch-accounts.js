import api from 'nordnet-next-api';

import { ACCOUNTS_REQUEST, ACCOUNTS_REQUEST_SUCCESS, ACCOUNTS_REQUEST_FAILURE } from './action-types';

function requestAccounts() {
  return {
    type: ACCOUNTS_REQUEST,
  };
}

function requestAccountsSuccess(data) {
  return {
    type: ACCOUNTS_REQUEST_SUCCESS,
    data,
  };
}

function requestAccountsFailure(data) {
  return {
    type: ACCOUNTS_REQUEST_FAILURE,
    data,
  };
}

export default function fetchAccounts() {
  return (dispatch) => {
    dispatch(requestAccounts());
    return api.get('/next/2/accounts').then(
        data => dispatch(requestAccountsSuccess(data)),
        data => dispatch(requestAccountsFailure(data)));
  };
}
