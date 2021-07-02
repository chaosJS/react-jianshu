import { createSlice } from '@reduxjs/toolkit';
import { checkLogin } from '../services/login';
export const loginSlice = createSlice({
	name: 'loginSlice',
	initialState: {
		isLogin: false,
		loading: false,
		sss: '',
	},
	reducers: {
		logout: (state) => {
			state.isLogin = false;
		},
		xxxx: (state, action) => {
			state.sss = action.payload.aa;
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
export const { logout, xxxx } = loginSlice.actions;
export default loginSlice.reducer;
