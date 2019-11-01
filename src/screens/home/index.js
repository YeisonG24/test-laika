import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {
  MainWrapper,
  HeaderScreen,
  CointsWrapper,
  ImageCoint,
  TextCoints,
  ImageWrapper,
  ImageLaika,
  CityWrapper,
  TextCity,
  Arrow,
  ShoppingCart,
  SearchWrapper,
  ContentWrapper,
  CategoryWrapper,
} from './style';
import RoundedInput from '../../components/rounded-input';
import CardCategory from '../../components/card-category';
import CardType from '../../components/card-type';
import CardCalls from '../../components/card-calls';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollIncator: false,
    };
  }

  render () {
    const { scrollIncator } = this.state;
    return (
      <MainWrapper>
        <HeaderScreen>
          <CointsWrapper>
            <ImageCoint source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
            <TextCoints>$ 0.00</TextCoints>
          </CointsWrapper>
          <ImageWrapper>
            <ImageLaika source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
          </ImageWrapper>
          <CityWrapper>
            <TextCity>Bogotá</TextCity>
            <Arrow>></Arrow>
          </CityWrapper>
          <ShoppingCart>
          </ShoppingCart>
        </HeaderScreen>
        <SearchWrapper>
          <RoundedInput placeholder="Buscar producto" />
        </SearchWrapper>
        <ContentWrapper>
          <CardCalls service="Croquetas" />
          <CategoryWrapper>
            <ScrollView horizontal showsHorizontalScrollIndicator={scrollIncator}>
              <CardCategory name="Categoria" onPress={() => {}} />
              <CardCategory name="Categoria" onPress={() => {}} />
              <CardCategory name="Categoria" onPress={() => {}} />
            </ScrollView>
          </CategoryWrapper>
          <CardType name="Concentrado" onPress={() => {}} />
        </ContentWrapper>
      </MainWrapper>
    )
  }
}

export default Home;