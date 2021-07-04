import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { xxxx } from '../store/loginSlice';
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
export const checkBlogLogin = createAsyncThunk(
	'login/checkBlogLogin',
	async (loginData, { dispatch }) => {
		const response = await axios.post(`/api/user/login`, loginData, {
			withCredentials: true,
		});
		// dispatch in async func
		dispatch(xxxx({ aa: 'vv' }));
		return response.data.data;
	}
);
