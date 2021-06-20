import { createSlice } from '@reduxjs/toolkit';

export const focusSlice = createSlice({
	name: 'focusState',
	initialState: {
		focused: false,
		mouseIn: false,
	},
	reducers: {
		inputFocused: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			// 可以直接修改state
			state.focused = true;
		},
		inputBlur: (state) => {
			state.focused = false;
		},

		mouseEnter: (state) => {
			state.mouseIn = true;
		},
		mouseLeave: (state) => {
			state.mouseIn = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { inputFocused, inputBlur, mouseEnter, mouseLeave } =
	focusSlice.actions;

export default focusSlice.reducer;
