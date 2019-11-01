import styled from 'styled-components';

export const MainWrapper = styled.View`
  width: 120px;
  height: 50px;
  border-radius: 10px;
  background-color: #FFFFFF;
  margin-left: 10px;
  align-items: center;
  border-color: ${props => props.selected ? '#6951AE' : '#FFFFFF'};
  border-width: ${props => props.selected ? '1px' : '0px'};
`;

export const ButtonWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  margin-left: 15%;
`;

export const IconWrapper = styled.View`
  width: 20px;
  height: 20px;
  margin-left: 4%;
  margin-right: 4%;
`;

export const TextCategory = styled.Text`
  font-size: 14px;
  color: #6951AE;
  font-weight: bold;
`;
