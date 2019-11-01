import React from 'react';
import PropTypes from 'prop-types';
import {
	CardWrapper,
	WrapperTouchable,
	PhotoWrapper,
	TextRegular,
	TextBold,
	ButtonCall,
	WrapperButton,
	WrapperInfo,
} from './style';
import CustomIcon from '../custom-icon';

const CardCalls = ({ service }) => (
	<CardWrapper>
		<WrapperTouchable>
			<PhotoWrapper>
				<CustomIcon nameIcon="md-contact" sizeIcon={20} colorIcon="white" />
			</PhotoWrapper>
			<WrapperInfo>
				<TextRegular>Asesoría </TextRegular>
				<TextBold>{service} </TextBold>
				<TextRegular>gratis. </TextRegular>
				<TextBold>¡Llamanos aqui!</TextBold>
			</WrapperInfo>
			<WrapperButton>
				<ButtonCall>
					<CustomIcon nameIcon="md-call" sizeIcon={16} colorIcon="white" />
				</ButtonCall>
			</WrapperButton>
		</WrapperTouchable>
	</CardWrapper>
);

CardCalls.defaultProps = {
	service: 'servicio'
};

CardCalls.propTypes = {
	service: PropTypes.string,
};

export default CardCalls;
