import styled from 'styled-components';

export const CardWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
	width: 45%;
	height: 60px;
	border-radius: 10px;
	background-color: #FFFFFF;
	margin-horizontal: 8px;
	position: relative;
	padding-top: 5%;
	margin-vertical: 2%;
	flex-direction: row;
	display: flex;
`;

export const TypeText = styled.Text`
  font-size: 16px;
  color: #6951AE;
  font-weight: bold;
  margin-left: 5%;
  flex: 7;
`;

export const WrapperImage = styled.View`
  flex: 3;
`;

export const ImageCard = styled.Image`
	width: 43px;
  height: 40px;
  flex-direction: row;
  padding-vertical: 10%;
  border-bottom-right-radius: 10px;
`;
