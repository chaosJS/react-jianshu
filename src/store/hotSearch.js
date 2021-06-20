import { createSlice } from '@reduxjs/toolkit';
import { fetchPostById } from '../services/posts';
export const hotSearchSlice = createSlice({
	name: 'hotSearch',
	initialState: {
		list: [],
		showWords: [],
		loading: false,
		error: '',
		page: 0,
		totalPage: 0,
		wordNum: 10,
	},
	reducers: {
		nextPage: (state, action) => {
			if (state.page === state.totalPage - 1) {
				state.page = 0;
				state.showWords = state.list.slice(
					(state.page - 1) * 10,
					state.list.length
				);
			} else {
				state.page = state.page + 1;
				state.showWords = state.list.slice(
					state.page * 10,
					(state.page + 1) * 10
				);
			}
			console.log(state.page, state.showWords);
		},
	},
	extraReducers: {
		[fetchPostById.fulfilled]: (state, action) => {
			state.totalPage = Math.ceil(action.payload.length / state.wordNum);
			state.list = action.payload;
			state.showWords = state.list.slice(0, state.wordNum);
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
export const { nextPage } = hotSearchSlice.actions;
export default hotSearchSlice.reducer;
