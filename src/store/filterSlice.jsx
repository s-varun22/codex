import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
	name: "filter",
	initialState: {
		allProducts: [],
		productList: [],
		inStockOnly: false,
		bestSellerOnly: false,
		sortBy: null,
		ratings: null,
	},
	reducers: {
		products(state, action) {
			state.allProducts = action.payload;
			state.productList = action.payload;
		},
		sortBy(state, action) {
			state.sortBy = action.payload;
		},
		ratings(state, action) {
			state.ratings = action.payload;
		},
		bestSeller(state, action) {
			state.bestSellerOnly = action.payload;
		},
		inStock(state, action) {
			state.inStockOnly = action.payload;
		},
		clear(state) {
			state.inStockOnly = false;
			state.bestSellerOnly = false;
			state.sortBy = null;
			state.ratings = null;
			state.productList = state.allProducts;
		},
	},
});

export const { products, sortBy, ratings, bestSeller, inStock, clear } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
