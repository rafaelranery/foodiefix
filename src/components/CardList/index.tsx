import { useSelector } from 'react-redux';
import { Card } from '..';
import { RootReducer } from '../../store/store';

export const CardList = () => {
	const { itens } = useSelector((state: RootReducer) => state.recipesList);

	return (
		<ul className="p-5 w-full flex flex-wrap justify-center gap-6 overflow-y-scroll">
			{itens.map((item) => (
				<Card key={item.recipe.label} />
			))}
		</ul>
	);
};
