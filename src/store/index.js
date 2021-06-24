import { configureStore } from '@reduxjs/toolkit';
import focusReducer from './focusSlice';
import hotSearchReducer from './hotSearch';
import topicList from './topicSlice';
import authorList from './authorSlice';
import detailDataFromState from './detailSlice';

export default configureStore({
	reducer: {
		focusState: focusReducer,
		hotSearchState: hotSearchReducer,
		topicList,
		authorList,
		detailDataFromState,
	},
});
