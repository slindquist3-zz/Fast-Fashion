import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk'
import rootReducer from '../reducers/root_reducer'
import ReduxPromise from 'redux-promise'
export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(ReduxPromise),
    // maybe use promises here?
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);

    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
      module.hot.accept('../reducers/root_reducer', () => {
        const nextReducer = require('../reducers/root_reducer');
      // might just be reducers instead of rootReducer?
        store.replaceReducer(nextReducer);
      })
    }

    return store
}
