import React from 'react';
import PropTypes from 'prop-types';
import {
	MainWrapper,
	ButtonWrapper,
	IconWrapper,
	TextCategory,
} from './style';
import CustomIcon from '../custom-icon';

const CardCategory = ({ name, onPress, selected }) => (
	<MainWrapper selected={selected}>
		<ButtonWrapper onPress={onPress}>
			<IconWrapper>
				<CustomIcon nameIcon="md-medal" sizeIcon={20} colorIcon="#6951AE" />
			</IconWrapper>
			<TextCategory>{name}</TextCategory>
		</ButtonWrapper>
	</MainWrapper>
)

CardCategory.defaultProps = {
	name: 'Categoria',
	onPress: () => {},
	selected: false,
}

CardCategory.propTypes = {
	name: PropTypes.string,
	onPress: PropTypes.func,
	selected: PropTypes.bool,
}

export default CardCategory;

