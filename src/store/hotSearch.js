import { createSlice } from '@reduxjs/toolkit';
import { fetchPostById } from '../services/posts';
export const hotSearchSlice = createSlice({
	name: 'hotSearch',
	initialState: {
		list: [],
		loading: false,
		error: '',
	},
	reducers: {},
	extraReducers: {
		[fetchPostById.fulfilled]: (state, action) => {
			state.list.push(action.payload);
			state.loading = false;
		},
		[fetchPostById.pending]: (state, action) => {
			state.loading = true;
		},
		[fetchPostById.rejected]: (state, action) => {
			state.error = 'some err happened';
		},
	},
});

// Action creators are generated for each case reducer function

export default hotSearchSlice.reducer;
