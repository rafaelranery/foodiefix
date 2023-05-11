import { configureStore } from '@reduxjs/toolkit';

import RecipesListReducers from './RecipesListSlice';

export const store = configureStore({
	reducer: {
		recipesList: RecipesListReducers,
	},
});

export type RootReducer = ReturnType<typeof store.getState>;
