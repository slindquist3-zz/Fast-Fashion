import { combineReducers } from 'redux';
import currentUser from './reducer_users'
import ProductsReducer from './reducer_products'

const rootReducer = combineReducers({
  products: ProductsReducer
});

export default rootReducer;


// export default combineReducers({currentUser, ProductsReducer})
