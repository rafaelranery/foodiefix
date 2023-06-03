import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type RecipesListState = {
	itens: Recipe[];
};

const initialState: RecipesListState = {
	itens: [],
};

const RecipesListSlice = createSlice({
	name: 'RecipesListSlice',
	initialState,
	reducers: {
		setRecipes(state, action: PayloadAction<Recipe[]>) {
			state.itens = action.payload;
		},
	},
});

export const { setRecipes } = RecipesListSlice.actions;
export default RecipesListSlice.reducer;
