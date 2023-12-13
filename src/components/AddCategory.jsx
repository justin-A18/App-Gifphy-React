import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
	const [text, setText] = useState('');

	const onAddCategory = (e) => {
		const value = e.target.value;
		setText(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length <= 1) return;

		onNewCategory(text);
		setText('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={text}
				onChange={onAddCategory}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	onNewCategory: PropTypes.func.isRequired,
};
