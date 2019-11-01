import React from 'react';
import PropTypes from 'prop-types';
import {
	CardWrapper,
	WrapperTouchable,
	PhotoWrapper,
	TextRegular,
	TextBold,
	ButtonCall, 
} from './style';

const CardCalls = ({ service }) => (
	<CardWrapper>
		<WrapperTouchable>
			<PhotoWrapper>
			</PhotoWrapper>
			<TextRegular>Asesoría </TextRegular>
			<TextBold>{service} </TextBold>
			<TextRegular>gratis. </TextRegular>
			<TextBold>¡Llamanos aqui!</TextBold>
			<ButtonCall>
			</ButtonCall>
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