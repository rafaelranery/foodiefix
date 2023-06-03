import { CardList } from '../components';
import { useRandomRecipes } from '../hooks/useRandomRecipes';

export const Home = () => {
	useRandomRecipes();
	return (
		<>
			<CardList />
		</>
	);
};
