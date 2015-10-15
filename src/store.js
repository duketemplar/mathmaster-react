/*
 * File contains initialization of Redux store. Store is initialised with imported reducers and middleware.
 *
 * See http://rackt.github.io/redux/docs/basics/Store.html for more details on Redux stores.
 */

import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// custom reducer for accounts component
// REPLACE with list of your own reducers
import accountsReducer from './accounts/reducers/accounts';
import preregListReducer from './prereg-list/reducers/prereg-list-reducer';

const MIDDLEWARE = [thunkMiddleware];

// defines which reducers are responsible for which parts of the state
// REPLACE with list of your own reducers
const REDUCERS = {
  accounts: accountsReducer,
  preregList: preregListReducer,
};

// creates Redux store
function finalCreateStore(middleware) {
  /*eslint-disable */
  return DEBUG ? finalCreateStoreDebug(middleware) : finalCreateStoreProduction(middleware);
  /*eslint-enable */
}

// creates Redux store when running in production mode
function finalCreateStoreProduction(middleware) {
  return applyMiddleware(...middleware)(createStore);
}

// creates Redux store when running in development mode - adds redux-devtools support
function finalCreateStoreDebug(middleware) {
  return compose(applyMiddleware(...middleware),
    require('redux-devtools').devTools(),
    require('redux-devtools').persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    )
  )(createStore);
}

// combines Redux reducers using Redux utility function combineReducers
const reducers = combineReducers(REDUCERS);

// exports initialised Redux store that is used globally in the application
export default finalCreateStore(MIDDLEWARE)(reducers);
