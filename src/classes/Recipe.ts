type RecipeImage = {
	url: string;
	width: number;
	height: number;
};

export type Recipe = {
	recipe: {
		label: string;
		images: {
			thumbnail: RecipeImage | RecipeImage[];
		};
		url: string;
		yield: number;
		healthLabels: string[];
		ingridientLines: string[];
		calories: number;
		cuisineType: string[];
		mealType: string[];
		dishType: string[];
	};
	_links: {
		self: {
			href: string;
		};
	};
};
