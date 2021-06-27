import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const preUrl = `${
	process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000'
}`;
export const fetchPostById = createAsyncThunk(
	'hotSearch/xxxxx',
	async (postId, thunkAPI) => {
		const response = await axios.get(`${preUrl}/api/headerList.json`);
		return response.data.data;
	}
);
export const getTopicList = createAsyncThunk(
	'topicList/getTopicList',
	async (postId, thunkAPI) => {
		const response = await axios.get(`${preUrl}/api/topicList.json`);
		return response.data.data;
	}
);

export const getAuthorList = createAsyncThunk(
	'authorList/getAuthorList',
	async (postId, thunkAPI) => {
		const response = await axios.get(`${preUrl}/api/authorList.json`);
		return response.data.data;
	}
);
export const addArticleList = createAsyncThunk(
	'topicList/addArticleList',
	async (page, thunkAPI) => {
		const response = await axios.get(
			`${preUrl}/api/addArticleList.json?page=${page}`
		);
		return response.data.data;
	}
);
