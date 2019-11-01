import styled from 'styled-components';

export const BackgroundCard = styled.ImageBackground`
	width: 100%;
  height: 100%;
  flex-direction: row;
  padding-vertical: 10%;
`;

export const CardWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
	width: 48%;
	height: 15%;
	border-radius: 10px;
	background-color: #FFFFFF;
	margin-horizontal: 8px;
`;

export const TypeText = styled.Text`
  font-size: 20px;
  color: #6951AE;
  font-weight: bold;
`;