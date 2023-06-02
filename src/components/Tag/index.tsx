import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { RootReducer } from '../../store/store';
import { addFilter, removeFilter } from '../../store/FilterSlice';

type Props = {
	title: string;
};

export const Tag = ({ title }: Props) => {
	const dispatch = useDispatch();
	const { tags } = useSelector((state: RootReducer) => state.filters);
	const { cuisineType, mealType } = useSelector(
		(state: RootReducer) => state.tags.itens
	);

	const [isInFilters, setIsInFilters] = useState(false);

	useEffect(() => {
		if (tags.find((tag) => tag === title)) {
			setIsInFilters(true);
		} else {
			setIsInFilters(false);
		}
	}, [tags]);

	const handleAddFilter = (tagTitle: string) => {
		if (cuisineType.includes(tagTitle)) {
			tags.forEach((tag) => {
				if (cuisineType.includes(tag)) {
					dispatch(removeFilter(tag));
				}
			});
		}
		if (mealType.includes(tagTitle)) {
			tags.forEach((tag) => {
				if (mealType.includes(tag)) {
					dispatch(removeFilter(tag));
				}
			});
		}
		setIsInFilters(!isInFilters);
		dispatch(addFilter(tagTitle));
	};

	const handleRemoveFilter = (tagTitle: string) => {
		setIsInFilters(!isInFilters);
		dispatch(removeFilter(tagTitle));
	};

	return (
		<>
			{!isInFilters ? (
				<span
					onClick={() => handleAddFilter(title)}
					className="py-1 px-1.5 cursor-pointer rounded bg-red-400 text-sm font-medium text-slate-50"
				>
					{title}
				</span>
			) : (
				<span
					onClick={() => handleRemoveFilter(title)}
					className="py-1 px-1.5 cursor-pointer rounded bg-red-400 text-sm font-medium text-slate-50 flex items-center gap-1"
				>
					{title}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
					</svg>
				</span>
			)}
		</>
	);
};
