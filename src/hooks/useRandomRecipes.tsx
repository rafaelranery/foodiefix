import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setRecipes } from '../store/RecipesListSlice';
import { Recipe } from '../classes/Recipe';
import { ApiResJson } from '../classes/ApiResJson';

export const useRandomRecipes = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		fetch(
			`https://api.edamam.com/api/recipes/v2?type=public&app_id=${
				import.meta.env.VITE_REACT_APP_EDAMAM_API_APP_ID
			}&app_key=${
				import.meta.env.VITE_REACT_APP_EDAMAM_API_APP_KEY
			}&mealType=Lunch&random=true`
		)
			.then((res) => res.json())
			.then((data: ApiResJson) => data.hits)
			.then((hits: Recipe[]) => {
				dispatch(setRecipes(hits));
			})
			.catch((err: ErrorEvent) => {
				throw new Error(err.message);
			});
	}, []);

	return null;
};
