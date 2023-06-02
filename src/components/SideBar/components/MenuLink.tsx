import { NavLink } from 'react-router-dom';

export type Props = {
	url: string;
	name: string;
	svg: JSX.IntrinsicElements;
};

export const MenuLink = ({ url, name, svg }: Props) => {
	const ACTIVE_CLASS_NAV =
		'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 bg-cPink dark:bg-gray-700';
	const INACTIVE_CLASS_NAV =
		'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';

	return (
		<li>
			<NavLink
				to={url}
				className={({ isActive }) =>
					isActive ? ACTIVE_CLASS_NAV : INACTIVE_CLASS_NAV
				}
			>
				{svg}
				<span className="ml-4">{name}</span>
			</NavLink>
		</li>
	);
};
