import { Tag } from '..';

import imgNotFound from '../../assets/image_not_found.jpg';

type Props = {
	label: string;
	img: string;
	url: string;
	tags: string[];
	labels: string;
};

export const Card = ({ label, img, url, tags, labels }: Props) => {
	return (
		<div className="max-w-full md:max-w-[230px] h-auto bg-cPink rounded-lg dark:bg-gray-800 relative shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] transition-shadow duration-500">
			<div className="absolute p-2 flex flex-wrap gap-1">
				{tags.map((tag) => (
					<Tag key={tag} title={tag} />
				))}
			</div>

			<a
				href={url}
				target="_blank"
				referrerPolicy="no-referrer"
				rel="noreferrer"
			>
				<img
					className="rounded-t-lg max-w-full w-full h-[230px] object-cover"
					src={img ? img : imgNotFound}
					alt=""
				/>
			</a>

			<div className="p-5">
				<a
					href={url}
					target="_blank"
					referrerPolicy="no-referrer"
					rel="noreferrer"
				>
					<h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
						{label}
					</h5>
				</a>
				<p className="mb-2 text-xs text-start font-normal text-gray-500 dark:text-slate-300">
					{labels.length > 100 ? labels.slice(0, 101) + '...' : labels}
				</p>
				<a
					href={url}
					target="_blank"
					referrerPolicy="no-referrer"
					className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-btnPrimary rounded-lg hover:bg-btnHover focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					rel="noreferrer"
				>
					Read more
					<svg
						aria-hidden="true"
						className="w-4 h-4 ml-2 -mr-1"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						></path>
					</svg>
				</a>
			</div>
		</div>
	);
};
