import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setTags } from '../store/TagsSlice';

export const useTags = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const tagsObjs: TagsObj = {
			cuisineType: [],
			mealType: [],
			diet: [],
			dishType: [],
			health: [],
		};
		fetch('https://api.edamam.com/doc/open-api/recipe-search-v2.json')
			.then((res) => res.json())
			.then((data: ApiDoc) => data.paths['/api/recipes/v2'].get.parameters)
			.then((params: TagAndLabelsDoc[]) => {
				const cuisineType = params.find(
					(param) => param.name === 'cuisineType'
				);
				const mealType = params.find((param) => param.name === 'mealType');
				const diet = params.find((param) => param.name === 'diet');
				const dishType = params.find((param) => param.name === 'dishType');
				const health = params.find((param) => param.name === 'health');
				if (cuisineType && mealType && diet && diet && dishType && health) {
					tagsObjs.cuisineType = cuisineType?.items.enum;
					tagsObjs.mealType = mealType?.items.enum;
					tagsObjs.diet = diet?.items.enum;
					tagsObjs.dishType = dishType?.items.enum;
					tagsObjs.health = health?.items.enum;
					dispatch(setTags(tagsObjs));
				}
			})
			.then(() => dispatch(setTags(tagsObjs)))
			.catch((err: ErrorEvent) => {
				throw new Error(err.message);
			});
	}, []);

	return null;
};
