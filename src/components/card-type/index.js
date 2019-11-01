import React from 'react';
import PropTypes from 'prop-types';
import {
	CardWrapper,
	TypeText,
	WrapperImage,
	ImageCard,
} from './style';

const CardType = ({ name, onPress }) => (
	<CardWrapper onPress={onPress}>
		<TypeText>{name}</TypeText>
		<WrapperImage>
			<ImageCard source={require('../../../assets/images/concentrado.png')}/>
		</WrapperImage>
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

