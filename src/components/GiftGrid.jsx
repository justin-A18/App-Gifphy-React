import PropTypes from 'prop-types';
import { GiftItem } from './GiftItem';
import { useFetchGift } from '../hooks/useFetchGift';
import { Loading } from './Loading';

export const GiftGrid = ({ category }) => {
	const { Gifts, isLoading } = useFetchGift(category);
	return (
		<section>
			<h2>{category}</h2>

			<div className='card-grid'>
				{!isLoading ? (
					Gifts.map((gift) => (
						<GiftItem
							key={gift.id}
							{...gift}
						/>
					))
				) : (
					<Loading/>
				)}
			</div>
		</section>
	);
};

GiftGrid.propTypes = {
	category: PropTypes.string.isRequired,
};
