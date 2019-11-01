import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {
  MainWrapper,
  HeaderScreen,
  CointsWrapper,
  IconWrapper,
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
  WrapperTypes,
} from './style';
import RoundedInput from '../../components/rounded-input';
import CardCategory from '../../components/card-category';
import CardType from '../../components/card-type';
import CardCalls from '../../components/card-calls';
import CustomIcon from '../../components/custom-icon';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollIncator: false,
      selected: false,
    };
  }

  onSelect = () => {
    const { selected } = this.state;
    this.setState({ selected: !selected });
  }

  render () {
    const { scrollIncator, selected } = this.state;
    return (
      <MainWrapper>
        <HeaderScreen>
          <CointsWrapper>
            <IconWrapper>
              <CustomIcon nameIcon="md-cash" sizeIcon={25} colorIcon="yellow" />
            </IconWrapper>
            <TextCoints>$ 0.00</TextCoints>
          </CointsWrapper>
          <ImageWrapper>
            <CustomIcon nameIcon="md-paw" sizeIcon={30} colorIcon="white" />
          </ImageWrapper>
          <CityWrapper>
            <TextCity>Bogotá</TextCity>
            <Arrow>></Arrow>
          </CityWrapper>
          <ShoppingCart>
            <CustomIcon nameIcon="md-cart" sizeIcon={25} colorIcon="white" />
          </ShoppingCart>
        </HeaderScreen>
        <SearchWrapper>
          <RoundedInput placeholder="Buscar producto" />
        </SearchWrapper>
        <ContentWrapper>
          <CardCalls service="Croquetas" />
          <CategoryWrapper>
            <ScrollView horizontal showsHorizontalScrollIndicator={scrollIncator}>
              <CardCategory name="Categoria" selected={selected} onPress={this.onSelect} />
              <CardCategory name="Categoria" selected={selected} onPress={this.onSelect} />
              <CardCategory name="Categoria" selected={selected} onPress={this.onSelect} />
            </ScrollView>
          </CategoryWrapper>
          <WrapperTypes>
            <CardType name="Concentrado" onPress={() => {}} />
            <CardType name="Concentrado" onPress={() => {}} />
            <CardType name="Concentrado" onPress={() => {}} />
          </WrapperTypes>
        </ContentWrapper>
      </MainWrapper>
    )
  }
}

export default Home;
