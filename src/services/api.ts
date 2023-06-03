import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.edamam.com/api/recipes',
	}),
	endpoints: (builder) => ({
		getRandom: builder.query<Recipe[], void>({
			query: () =>
				'v2?type=public&app_id=65301b72&app_key=35e69eb922cd55c6981713b229e358b0&mealType=Lunch&random=true',
			transformResponse: (res: ApiResJson, meta, arg) => res.hits,
		}),
	}),
});

export const { useGetRandomQuery } = api;

export default api;
