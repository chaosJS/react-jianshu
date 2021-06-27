import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const preUrl = `${
	process.env.NODE_ENV === 'production'
		? '/react-jianshu'
		: 'http://localhost:3000'
}`;
export const fetchDetailById = createAsyncThunk(
	'detailInfo/getDetailInfo',
	async (detailId, thunkAPI) => {
		const response = await axios.get(
			`${preUrl}/api/detailInfo.json?id=${detailId}`
		);
		return response.data.data;
	}
);
