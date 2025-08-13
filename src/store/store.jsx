import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { cartReducer } from "./cartSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
	reducer: {
		filterState: filterReducer,
		cartState: cartReducer,
		authState: authReducer,
	},
});
