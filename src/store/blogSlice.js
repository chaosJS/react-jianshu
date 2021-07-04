import { createSlice } from '@reduxjs/toolkit';
import { getBlogList, newBlog } from '../services/blog';
export const blogSlice = createSlice({
	name: 'blogState',
	initialState: {
		loading: false,
		createBlogSuccess: false,
		blogList: [],
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

		[getBlogList.fulfilled]: (state, action) => {
			state.blogList = action.payload;
			state.loading = false;
		},
		[getBlogList.pending]: (state) => {
			state.loading = true;
		},
	},
});

// Action creators are generated for each case reducer function
// export const {} = topicSlice.actions;
export default blogSlice.reducer;
