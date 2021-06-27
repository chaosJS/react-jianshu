import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const checkLogin = createAsyncThunk(
	'login/checkLogin',
	async (loginData, thunkAPI) => {
		const response = await axios.get(
			`http://localhost:3000/api/isLogin.json?username=${loginData.username}&password=${loginData.password}`
		);
		return response.data.data;
	}
);
