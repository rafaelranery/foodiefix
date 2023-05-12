import { configureStore } from '@reduxjs/toolkit';

import RecipesListReducers from './RecipesListSlice';
import TagsReducers from './TagsSlice';

export const store = configureStore({
	reducer: {
		recipesList: RecipesListReducers,
		tags: TagsReducers,
	},
});

export type RootReducer = ReturnType<typeof store.getState>;
