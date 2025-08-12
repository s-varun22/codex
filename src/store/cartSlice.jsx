import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartList: [],
		totalPrice: 0,
	},
	reducers: {
		addToCart(state, action) {
			const product = action.payload;
			state.totalPrice += product.price;
			state.cartList = [...state.cartList, product];
		},
		removeFromCart(state, action) {
			const product = action.payload;
			const existingProduct = state.cartList.find((item) => item.id === product.id);

			if (!existingProduct) return;

			state.totalPrice -= product.price;
			state.cartList = state.cartList.filter((item) => item.id !== product.id);
		},
		clearCart(state) {
			state.cartList = [];
			state.totalPrice = 0;
		},
	},
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
