import { createSlice } from '@reduxjs/toolkit';

import { getAuthorList } from '../services/posts';

export const authorListSlice = createSlice({
	name: 'authorListState',
	initialState: {
		list: [],
		loading: false,
	},
	reducers: {},
	extraReducers: {
		[getAuthorList.fulfilled]: (state, action) => {
			state.list = action.payload;
			state.loading = false;
		},
		[getAuthorList.pending]: (state, action) => {
			state.loading = true;
		},
	},
});

// Action creators are generated for each case reducer function
// export const {} = topicSlice.actions;
export default authorListSlice.reducer;
