import React from 'react';
import { TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import * as RootNavigation from '../../RootNavigation';

import ImgLogo from '../../assets/images/logo.png';
import { Container, Logo, Carrinho, Counter, TextCounter } from './styles';

function ActionBar({ cartSize }) {
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

export default connect(state => ({
  cartSize: state.cart.length,
}))(ActionBar);
