import { Recipe } from '../../classes/Recipe';

export const gatherHealthLabels = (recipe: Recipe): string => {
	const paragraphedLabels = recipe.recipe.healthLabels.join(', ');
	return paragraphedLabels;
};
