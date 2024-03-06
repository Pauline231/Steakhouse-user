import {configureStore} from "@reduxjs/toolkit"
import cartReducer from '../features/cartSlice'
import productReducer from '../features/productSlice'
import authReducer from "../features/authSlice"
import checkOutReducer from '../features/checkOutSlice'
import profileReducer from '../features/profileSlice'
import reviewReducer from '../features/reviewSlice'
 
export const store = configureStore({
    reducer: {
        cart : cartReducer,
        product : productReducer,
        auths : authReducer,
        checkOut : checkOutReducer,
        profile : profileReducer,
        review : reviewReducer
    },  
})