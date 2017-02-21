import ReduxPromise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/root_reducer'

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(ReduxPromise),
))
