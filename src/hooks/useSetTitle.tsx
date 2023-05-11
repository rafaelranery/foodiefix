import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useSetTitle = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		switch (pathname) {
			case '/':
				document.title = 'FoodieFix';
				break;

			case '/v':
				document.title = 'FoodieFix | Veggie';
				break;

			case '/schedule':
				document.title = 'FoodieFix | Scheduler+';
				break;

			case '/aboutus':
				document.title = 'FoodieFix | About Us';
				break;
		}
	}, [pathname]);
	return null;
};
