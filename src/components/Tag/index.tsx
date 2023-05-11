type Props = {
	title: string;
};

export const Tag = ({ title }: Props) => {
	return (
		<span className="py-1 px-1.5 cursor-pointer rounded bg-red-400 text-sm font-medium text-slate-50">
			{title}
		</span>
	);
};
