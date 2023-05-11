type Props = {
	children: JSX.Element | JSX.Element[];
};

export const TagsContainer = ({ children }: Props) => {
	return (
		<div className="bg-slate-300 dark:bg-slate-500 rounded-xl p-3 flex flex-wrap justify-start gap-3">
			{children}
		</div>
	);
};
