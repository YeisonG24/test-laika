import styled from 'styled-components';

export const CardWrapper = styled.View`
	width: 94%;
	height: 8%;
	border-radius: 10px;
	background-color: #C9FBFF;
	margin-vertical: 1%; 
	margin-horizontal: 3%;
`;

export const WrapperTouchable = styled.TouchableOpacity.attrs({
	activeOpacity: 1,
})`
	width: 100%;
	height: 100%;
	flex-direction: row;
`;

export const PhotoWrapper = styled.Image`
	width: 10px;
	height: 10px;
`

export const TextRegular  = styled.Text`
	font-size: 12px;
	font-weight: 100;
	color: #6951AE;
`;

export const TextBold  = styled.Text`
	font-size: 12px;
	font-weight: bold;
	color: #6951AE;
`;

export const ButtonCall = styled.TouchableOpacity`
	width: 20px;
	height: 20px;
	border-radius: 60px;
	background-color: #6951AE;
	margin-left: 3%;
`;