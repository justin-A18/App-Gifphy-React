import PropTypes from 'prop-types';

export const GiftItem = ({ title, url }) => {
	return (
		<article className='card'>
			<h4>{title}</h4>
			<img
				src={url}
				alt={title}
			/>
		</article>
	);
};

GiftItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};
