import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const fetchPostById = createAsyncThunk(
	'hotSearch/xxxxx',
	async (postId, thunkAPI) => {
		const response = await axios.get(
			`http://localhost:3000/api/headerList.json`
		);
		return response.data.data;
	}
);
export const getTopicList = createAsyncThunk(
	'topicList/getTopicList',
	async (postId, thunkAPI) => {
		const response = await axios.get(
			`http://localhost:3000/api/topicList.json`
		);
		return response.data.data;
	}
);

export const getAuthorList = createAsyncThunk(
	'authorList/getAuthorList',
	async (postId, thunkAPI) => {
		const response = await axios.get(
			`http://localhost:3000/api/authorList.json`
		);
		return response.data.data;
	}
);
export const addArticleList = createAsyncThunk(
	'topicList/addArticleList',
	async (page, thunkAPI) => {
		const response = await axios.get(
			`http://localhost:3000/api/addArticleList.json?page=${page}`
		);
		return response.data.data;
	}
);
