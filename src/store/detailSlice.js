import { createSlice } from '@reduxjs/toolkit';

import { fetchDetailById } from '../services/detail';

export const detailSlice = createSlice({
	name: 'detailSlice',
	initialState: {
		detailData: {},
		loading: false,
	},
	reducers: {},
	extraReducers: {
		[fetchDetailById.fulfilled]: (state, action) => {
			state.detailData = action.payload;
			state.loading = false;
		},
		[fetchDetailById.pending]: (state, action) => {
			state.loading = true;
		},
	},
});

// Action creators are generated for each case reducer function
// export const {} = topicSlice.actions;
export default detailSlice.reducer;
