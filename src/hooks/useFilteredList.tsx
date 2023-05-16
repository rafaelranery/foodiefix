import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { RootReducer } from '../store/store';
import { setUri } from '../store/FilterSlice';

export const useFilteredList = () => {
	const { tags } = useSelector((state: RootReducer) => state.filters);
	const { cuisineType, diet, health, mealType } = useSelector(
		(state: RootReducer) => state.tags.itens
	);
	const dispatch = useDispatch();

	let baseUri = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${
		import.meta.env.VITE_REACT_APP_EDAMAM_API_APP_ID
	}&app_key=${import.meta.env.VITE_REACT_APP_EDAMAM_API_APP_KEY}`;

	useEffect(() => {
		if (tags.length > 0) {
			tags.forEach((tag) => {
				if (diet.includes(tag)) {
					baseUri += `&diet=${tag}`;
				} else if (health.includes(tag)) {
					baseUri += `&health=${tag}`;
				} else if (cuisineType.includes(tag)) {
					baseUri += `&cuisineType=${tag}`;
				} else if (mealType.includes(tag)) {
					baseUri += `&mealType=${tag}`;
				}
			});
			baseUri += '&random=true';
			dispatch(setUri(baseUri));
		}
		console.log(baseUri);
	}, [tags]);

	return null;
};
/* Terminei de fazer a construção e a colocação da uri no state, agora começar a fazer a funcionalidade do fetch da nova url e da renderização na lista */

/* https://api.edamam.com/api/recipes/v2?type=public&app_id=65301b72&app_key=35e69eb922cd55c6981713b229e358b0&mealType=Lunch&random=true */
