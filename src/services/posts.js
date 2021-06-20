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
