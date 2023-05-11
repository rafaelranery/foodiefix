import { Recipe } from '../../classes/Recipe';

export const gatherTags = (recipe: Recipe): string[] => {
	const allTags = [
		...recipe.recipe.cuisineType,
		...recipe.recipe.mealType,
		...recipe.recipe.dishType,
		...recipe.recipe.dietLabels,
	];
	return allTags;
};
