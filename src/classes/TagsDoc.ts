export type TagAndLabelsDoc = {
	name: string;
	items: {
		type: string;
		enum: string[];
	};
};

export type ApiDoc = {
	paths: {
		'/api/recipes/v2': {
			get: {
				parameters: TagAndLabelsDoc[];
			};
		};
	};
};

export type TagsObj = {
	cuisineType: string[];
	mealType: string[];
	diet: string[];
	health: string[];
	dishType: string[];
};
