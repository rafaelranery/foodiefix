import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FilterState = {
	tags: string[];
	uri: string;
};

const initialState: FilterState = {
	tags: [],
	uri: '',
};

const FilterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		addFilter(state, action: PayloadAction<string>) {
			state.tags.push(action.payload);
		},
		removeFilter(state, action: PayloadAction<string>) {
			state.tags = state.tags.filter((tag) => tag !== action.payload);
		},
		setUri(state, action: PayloadAction<string>) {
			state.uri = action.payload;
		},
	},
});

export const { addFilter, removeFilter, setUri } = FilterSlice.actions;
export default FilterSlice.reducer;
