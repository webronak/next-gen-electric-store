import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import cartReducer from './cart/cart-reducer';
import ProductDataReducer from "./productData/productData.reducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' ;

const persistConfig = {
    key:'root',
    storage
}

const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    productData:ProductDataReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;