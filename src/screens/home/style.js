import styled from 'styled-components';

export const MainWrapper = styled.View`
  width: 100%;
  height: 100%;  
  display: flex;
  background-color: #9D4FA7;
`;

export const HeaderScreen = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  display: flex;
`;

export const CointsWrapper = styled.View`
  flex-direction: row;
  display: flex;
  flex: 2;
  padding-vertical: 2%;
`;

export const ImageCoint = styled.Image`
  width: 15px;
  height: 15px;
  resize-mode: stretch;
  flex: 5;
`;

export const TextCoints = styled.Text`
  font-size: 12px;
  color: #FFFFFF;
  flex: 5;
`;

export const ImageWrapper = styled.View`
  flex: 5;
  align-items: center;
`;

export const ImageLaika = styled.Image`
  width: 15px;
  height: 15px;
  resize-mode: stretch;
`;

export const CityWrapper = styled.View`
  flex: 2;
  flex-direction: row;
`;

export const TextCity = styled.Text`
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 100;
  padding-vertical: 9%;
`;

export const Arrow = styled.Text`
  color: #FFFFFF;
  font-size: 25px;
  font-weight: bold;
  margin-left: 5%;
`;

export const ShoppingCart = styled.View`
  flex: 1;
  background-color: red;
`;

export const SearchWrapper = styled.View`
  width: 100%;
  padding-horizontal: 2%;
  padding-vertical: 1%;
  flex: 1;
`;

export const ContentWrapper = styled.View`
  width: 100%;
  height: 100%;
  flex: 8;
  background-color: #F1F2F3;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const CategoryWrapper = styled.View`
  width: 100%;
  height: 16%;
  margin-vertical: 1%;
`;