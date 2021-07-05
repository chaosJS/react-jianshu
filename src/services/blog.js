// local blog interface
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.withCredentials = true;
export const getBlogList = createAsyncThunk(
	'blogData/getBlogList',
	async (authorName) => {
		const response = await axios.get(`/blogApi/blog/list?author=${authorName}`);
		return response.data.data;
	}
);
export const newBlog = createAsyncThunk(
	'blogData/newBlog',
	async (newBlogData) => {
		const response = await axios.post(`/blogApi/blog/new`, {
			...newBlogData,
		});
		return response.data.data;
	}
);

export const updateBlog = createAsyncThunk(
	'blogData/updateBlog',
	async ({ blogId, title, content }) => {
		const response = await axios.post(`/blogApi/blog/update?id=${blogId}`, {
			title,
			content,
		});
		return response.data.data;
	}
);
export const delBlog = createAsyncThunk(
	'blogData/delBlog',
	async ({ blogId, author = '佚名' }) => {
		const response = await axios.post(`/blogApi/blog/delete?id=${blogId}`, {
			author,
		});
		return response.data.data;
	}
);

export const getBlogDetail = createAsyncThunk(
	'blogData/getBlogDetail',
	async (blogId) => {
		const response = await axios.get(`/blogApi/blog/detail?id=${blogId}`);
		return response.data.data;
	}
);
