import { createSlice } from '@reduxjs/toolkit';

import { newBlog } from '../services/blog';

export const blogSlice = createSlice({
	name: 'blogState',
	initialState: {
		loading: false,
		createBlogSuccess: false,
	},
	reducers: {},
	extraReducers: {
		[newBlog.fulfilled]: (state, action) => {
			state.createBlogSuccess = true;
			state.loading = false;
		},
		[newBlog.pending]: (state, action) => {
			state.loading = true;
		},
	},
});

// Action creators are generated for each case reducer function
// export const {} = topicSlice.actions;
export default blogSlice.reducer;
