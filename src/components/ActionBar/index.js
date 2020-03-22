import React from 'react';
import { TouchableHighlight } from 'react-native';
import { useSelector } from 'react-redux';

import * as RootNavigation from '../../RootNavigation';

import ImgLogo from '../../assets/images/logo.png';
import { Container, Logo, Carrinho, Counter, TextCounter } from './styles';

export default function ActionBar() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <TouchableHighlight onPress={() => RootNavigation.navigate('Home')}>
        <Logo source={ImgLogo} />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => RootNavigation.navigate('Cart')}>
        <Counter>
          <TextCounter>{cartSize}</TextCounter>
          <Carrinho name="shopping-basket" size={28} />
        </Counter>
      </TouchableHighlight>
    </Container>
  );
}
