import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TagsState = {
	itens: TagsObj;
};

const initialState: TagsState = {
	itens: {
		cuisineType: [],
		diet: [],
		dishType: [],
		mealType: [],
		health: [],
	},
};

const TagsSlice = createSlice({
	name: 'Tags',
	initialState,
	reducers: {
		setTags(state, action: PayloadAction<TagsObj>) {
			state.itens = action.payload;
		},
	},
});

export const { setTags } = TagsSlice.actions;

export default TagsSlice.reducer;
