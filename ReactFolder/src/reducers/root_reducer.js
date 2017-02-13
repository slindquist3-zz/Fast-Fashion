import { combineReducers } from 'redux';
import UsersReducer from './reducer_users'
import ProductsReducer from './reducer_products'
import CartsReducer from './reducer_carts'

const rootReducer = combineReducers({
  products: ProductsReducer,
  users: UsersReducer,
  cart: CartsReducer


  //do I have to use rootReducer, or could I just use a combine reducers function everywhere?

});

export default rootReducer;


// export default combineReducers({currentUser, ProductsReducer})
