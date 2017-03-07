import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import routes from './routes'

// import rootReducer from './reducers/root_reducer';
// import configureStore from './store/configureStore';

// export const store = configureStore()

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />
  , document.querySelector('.container'));
