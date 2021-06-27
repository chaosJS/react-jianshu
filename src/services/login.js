import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const preUrl = `${
	process.env.NODE_ENV === 'production'
		? '/react-jianshu'
		: 'http://localhost:3000'
}`;
export const checkLogin = createAsyncThunk(
	'login/checkLogin',
	async (loginData, thunkAPI) => {
		const response = await axios.get(
			`${preUrl}/api/isLogin.json?username=${loginData.username}&password=${loginData.password}`
		);
		return response.data.data;
	}
);
