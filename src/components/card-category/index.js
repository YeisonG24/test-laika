import React from 'react';
import PropTypes from 'prop-types';
import {
	MainWrapper,
	ButtonWrapper,
	IconWrapper,
	TextCategory
} from './style';

const CardCategory = ({ name, onPress }) => (
	<MainWrapper>
		<ButtonWrapper onPress={onPress}>
			<IconWrapper>
			</IconWrapper>
			<TextCategory>{name}</TextCategory>
		</ButtonWrapper>
	</MainWrapper>
)

CardCategory.defaultProps = {
	name: 'Categoria',
	onPress: () => {},
}

CardCategory.propTypes = {
	name: PropTypes.string,
	onPress: PropTypes.func,
}

export default CardCategory;

