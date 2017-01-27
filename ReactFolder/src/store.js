import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root_reducer'


export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
))
