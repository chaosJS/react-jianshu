import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const fetchPostById = createAsyncThunk(
	'hotSearch/xxxxx',
	async (postId, thunkAPI) => {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${postId}`
		);
		return response.data;
	}
);
