import { useSelector } from 'react-redux';
import { Card, Loader } from '..';
import { RootReducer } from '../../store/store';
import { gatherTags } from '../../utils/functions/gatherTags';
import { gatherHealthLabels } from '../../utils/functions/gatherHealthLabels';
import { useFilteredList } from '../../hooks/useFilteredList';
import { useGetRandomQuery } from '../../services/api';
import { useEffect, useState } from 'react';

export const CardList = () => {
	const { itens } = useSelector((state: RootReducer) => state.recipesList);
	// useFilteredList();
	// const { data: itens } = useGetRandomQuery();
	const [loader, setLoader] = useState(true);
	useFilteredList();

	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 1500);
	}, []);

	if (!loader) {
		return (
			<ul className="p-5 w-full flex flex-wrap items-start justify-center md:justify-between gap-3 gap-y-6 overflow-y-scroll">
				{itens.map((item) => {
					return (
						<Card
							key={item.recipe.label}
							label={item.recipe.label}
							img={item.recipe.images.REGULAR.url}
							url={item.recipe.url}
							tags={gatherTags(item)}
							labels={gatherHealthLabels(item)}
						/>
					);
				})}
			</ul>
		);
	}

	return <Loader />;
};
