// local blog interface
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const preUrl = `${
	process.env.NODE_ENV === 'production'
		? '/react-jianshu'
		: 'http://localhost:8787'
}`;
export const newBlog = createAsyncThunk(
	'blogData/getBlogList',
	async (newBlogData) => {
		const response = await axios.post(`${preUrl}/api/blog/new`, {
			...newBlogData,
		});
		return response.data.data;
	}
);
