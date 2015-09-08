import _ from 'lodash';
import { ACCOUNTS_REQUEST, ACCOUNTS_REQUEST_SUCCESS, ACCOUNTS_REQUEST_FAILURE} from '../actions/action-types';

export default function accounts(state = {isFetching: false, accounts: []}, action) {
  switch (action.type) {
  case ACCOUNTS_REQUEST:
    return _.assign({}, state, {
      isFetching: true,
    });
  case ACCOUNTS_REQUEST_SUCCESS:
    return _.assign({}, state, {
      isFetching: false,
      accounts: action.data,
    });
  case ACCOUNTS_REQUEST_FAILURE:
    return _.assign({}, state, {
      isFetching: false,
      accounts: [],
    });
  default:
    return state;
  }
}
