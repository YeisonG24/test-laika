import React from 'react';
import PropTypes from 'prop-types';
import {
	CardWrapper,
	BackgroundCard,
	TypeText,
} from './style';

const CardType = ({ name, onPress }) => (
	<CardWrapper onPress={onPress}>
		<BackgroundCard>
			<TypeText>{name}</TypeText>
		</BackgroundCard>
	</CardWrapper>
)

CardType.defaultProps = {
	name: 'Tipo',
	onPress: () => {},
}

CardType.propTypes = {
	name: PropTypes.string,
	onPress: PropTypes.func,
}

export default CardType;

