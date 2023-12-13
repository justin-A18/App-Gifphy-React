import { useState } from 'react';
import { AddCategory,GiftGrid } from './components';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState([]);

	const getCategory = (text) => {
		if (categories.includes(text.toLowerCase())) return;

		const temp = [...categories];
		temp.unshift(text);
		setCategories(temp);
	};

	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory
				onNewCategory={getCategory}
				currentCategories={categories}
			/>

			{categories.map((category) => (
				<GiftGrid
					key={category}
					category={category}
				/>
			))}
		</>
	);
};
