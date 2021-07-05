import { createSlice } from '@reduxjs/toolkit';
import { getBlogList, newBlog, getBlogDetail } from '../services/blog';
export const blogSlice = createSlice({
	name: 'blogState',
	initialState: {
		loading: false,
		createBlogSuccess: false,
		blogList: [],

		// blog detail
		blogInfo: {
			title: '',
			content: '',
		},
	},
	reducers: {
		setBlogTitle: (state, action) => {
			state.blogInfo.title = action.payload.title;
		},
		setBlogContent: (state, action) => {
			state.blogInfo.content = action.payload.content;
		},
	},
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

		[getBlogDetail.fulfilled]: (state, action) => {
			state.blogInfo = action.payload;
			state.loading = false;
		},
		[getBlogDetail.pending]: (state) => {
			state.loading = true;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setBlogTitle, setBlogContent } = blogSlice.actions;
export default blogSlice.reducer;
