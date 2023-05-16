export function setFilteredList(
	tags: string[],
	cuisineType: string[],
	diet: string[],
	health: string[],
	mealType: string[]
) {
	let baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${
		import.meta.env.VITE_REACT_APP_EDAMAM_API_APP_ID
	}&app_key=${import.meta.env.VITE_REACT_APP_EDAMAM_API_APP_KEY}`;

	tags.forEach((tag) => {
		if (diet.includes(tag)) {
			baseUrl += `&diet=${tag}`;
			console.log(baseUrl);
		} else if (health.includes(tag)) {
			baseUrl += `&health=${tag}`;
			console.log(baseUrl);
		} else if (cuisineType.includes(tag)) {
			baseUrl += `&cuisineType=${tag}`;
			console.log(baseUrl);
		} else if (mealType.includes(tag)) {
			baseUrl += `&mealType=${tag}`;
			console.log(baseUrl);
		}
	});
	baseUrl += '&random=true';

	console.log(baseUrl);
}
