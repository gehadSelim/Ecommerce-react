import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Reducers/productReducer";
import cartReducer from "./Reducers/cartReducer";

export const store = configureStore({
	reducer: {
		products: productReducer,
		cart: cartReducer,
	},
});
