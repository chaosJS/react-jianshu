import { createSlice } from '@reduxjs/toolkit';
import { checkLogin } from '../services/login';
export const loginSlice = createSlice({
	name: 'loginSlice',
	initialState: {
		isLogin: false,
		loading: false,
	},
	reducers: {
		logout: (state) => {
			state.isLogin = false;
		},
	},
	extraReducers: {
		[checkLogin.fulfilled]: (state, action) => {
			if (action.payload) {
				state.isLogin = true;
			} else {
				state.isLogin = false;
			}
			state.loading = false;
		},
		[checkLogin.pending]: (state, action) => {
			state.loading = true;
		},
	},
});

// Action creators are generated for each case reducer function
export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
