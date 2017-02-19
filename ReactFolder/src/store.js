import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/root_reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore(){
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}
