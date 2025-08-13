import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: { token: null, userId: null },
	reducers: {
		setAuthData(state, action) {
			const { token, userId } = action.payload;
			state.token = token;
			state.userId = userId;
		},

		logout(state) {
			state.token = null;
			state.userId = null;
		},
	},
});

export const { setAuthData, logout } = authSlice.actions;

export const getToken = (state) => state.authState.token;
export const getUserId = (state) => state.authState.userId;

export const authReducer = authSlice.reducer;
