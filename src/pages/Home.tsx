import { CardList } from '../components';
import { useRandomRecipes } from '../hooks/useRandomRecipes';
import { useTags } from '../hooks/useTags';

export const Home = () => {
	useRandomRecipes();
	return (
		<>
			<CardList />
		</>
	);
};
