import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from './users/userReducer';
import cartReducer from './cart/cartReducer';
import customerReducer from './Customer/cusReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
    cartReducers: cartReducer,

    customerReducers: customerReducer
})

export default rootReducer