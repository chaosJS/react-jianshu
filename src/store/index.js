import { configureStore } from '@reduxjs/toolkit';
import focusReducer from './focusSlice';
import hotSearchReducer from './hotSearch';

export default configureStore({
	reducer: {
		focusState: focusReducer,
		hotSearchState: hotSearchReducer,
	},
});
