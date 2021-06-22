import { configureStore } from '@reduxjs/toolkit';
import focusReducer from './focusSlice';
import hotSearchReducer from './hotSearch';
import topicList from './topicSlice';

export default configureStore({
	reducer: {
		focusState: focusReducer,
		hotSearchState: hotSearchReducer,
		topicList,
	},
});
