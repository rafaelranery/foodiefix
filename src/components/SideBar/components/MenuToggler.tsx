import { SetStateAction } from 'react';

type Props = {
	menuOpen: boolean;
	setMenuOpen: React.Dispatch<SetStateAction<boolean>>;
	inNavbar: boolean;
};

export const MenuToggler = ({ menuOpen, setMenuOpen, inNavbar }: Props) => {
	return (
		<>
			{inNavbar ? (
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					id="theme-toggle"
					type="button"
					className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-xl p-1.5"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						className="bi bi-arrow-bar-left w-6 h-6"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"
						/>
					</svg>
				</button>
			) : (
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					data-drawer-target="separator-sidebar"
					data-drawer-toggle="separator-sidebar"
					aria-controls="separator-sidebar"
					type="button"
					className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				>
					<span className="sr-only">Open sidebar</span>
					<svg
						className="w-6 h-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							clipRule="evenodd"
							fillRule="evenodd"
							d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
						></path>
					</svg>
				</button>
			)}
		</>
	);
};
