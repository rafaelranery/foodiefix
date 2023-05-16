import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import RecipesListReducers from './RecipesListSlice';
import TagsReducers from './TagsSlice';
import FilterReducers from './FilterSlice';

import api from '../services/api';

export const store = configureStore({
	reducer: {
		recipesList: RecipesListReducers,
		tags: TagsReducers,
		filters: FilterReducers,
		[api.reducerPath]: api.reducer,
	},
	middleware: () => getDefaultMiddleware().concat(api.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>;
