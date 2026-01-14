import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice';
import productsReducer from './productSlice';
import quantityReducer from './quantitySlice';

const store = configureStore({
    reducer:{
        cart:cartReducer,
        products:productsReducer,
        quantity:quantityReducer
    }
})

export default store