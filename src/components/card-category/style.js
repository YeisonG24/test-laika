import styled from 'styled-components';

export const MainWrapper = styled.View`
  width: 120px;
  height: 50px;
  border-radius: 10px;
  background-color: #FFFFFF;
  margin-horizontal: 8px;
`;

export const ButtonWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 100%;
  height: 100%;
  flex-direction: row;
  padding-vertical: 10%;
`;

export const IconWrapper = styled.View`
  width: 20px;
  height: 20px;
`;

export const TextCategory = styled.Text`
  font-size: 14px;
  color: #6951AE;
  font-weight: bold;
`;