import React from 'react';
import PropTypes from 'prop-types';
import {
	MainWrapper,
	WrapperIcon,
	Input,
	VoiceWrapper,
} from './style';
import CustomIcon from '../custom-icon';

const RoundedInput = ({ placeholder }) => (
	<MainWrapper>
		<WrapperIcon>
			<CustomIcon nameIcon="md-search" sizeIcon={25} colorIcon="#6951AE" />
		</WrapperIcon>
		<Input placeholder={placeholder}/>
		<VoiceWrapper>
			<CustomIcon nameIcon="md-alert" sizeIcon={25} colorIcon="#6951AE" />
		</VoiceWrapper>
	</MainWrapper>
)

RoundedInput.defaultProps = {
	placeholder: 'Mensaje',
}

RoundedInput.propTypes = {
	placeholder: PropTypes.string,
}

export default RoundedInput;
