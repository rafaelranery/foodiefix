import { Recipe } from './Recipe';

export type ApiResJson = {
	from: number;
	to: number;
	_links: {};
	hits: Recipe[];
};
