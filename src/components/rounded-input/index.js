import React from 'react';
import PropTypes from 'prop-types';
import {
	MainWrapper,
	WrapperIcon,
	Input,
	Voice,
} from './style';
import CustomIcon from '../custom-icon';

const RoundedInput = ({ placeholder }) => (
	<MainWrapper>
		<WrapperIcon>
		</WrapperIcon>
		<Input placeholder={placeholder}/>
		<Voice></Voice>
	</MainWrapper>
)

RoundedInput.defaultProps = {
	placeholder: 'Mensaje',
}

RoundedInput.propTypes = {
	placeholder: PropTypes.string,
}

export default RoundedInput;