import { useState, useEffect } from 'react';
import { getGifts } from '../helpers/getGifts';

export const useFetchGift = (category) => {
	const [Gifts, setGifts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getGifts(category).then((newGift) => {
			setGifts(newGift);
			setIsLoading(false);
		});
	}, [category]);

	return {
		Gifts,
		isLoading: isLoading,
	};
};
