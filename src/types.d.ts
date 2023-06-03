declare type RecipeImage = {
	url: string;
	width: number;
	height: number;
};

declare type Recipe = {
	recipe: {
		label: string;
		images: {
			REGULAR: RecipeImage;
			THUMBNAIL: RecipeImage;
		};
		url: string;
		yield: number;
		healthLabels: string[];
		dietLabels: string[];
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

declare type ApiResJson = {
	from: number;
	to: number;
	_links: {};
	hits: Recipe[];
};

declare type TagAndLabelsDoc = {
	name: string;
	items: {
		type: string;
		enum: string[];
	};
};

declare type ApiDoc = {
	paths: {
		'/api/recipes/v2': {
			get: {
				parameters: TagAndLabelsDoc[];
			};
		};
	};
};

declare type TagsObj = {
	cuisineType: string[];
	mealType: string[];
	diet: string[];
	health: string[];
	dishType: string[];
};
