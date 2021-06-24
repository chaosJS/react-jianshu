import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const fetchDetailById = createAsyncThunk(
	'detailInfo/getDetailInfo',
	async (detailId, thunkAPI) => {
		const response = await axios.get(
			`http://localhost:3000/api/detailInfo.json?id=${detailId}`
		);
		return response.data.data;
	}
);
