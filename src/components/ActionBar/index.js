import React from 'react';
import { Image } from 'react-native';

import ImgLogo from '../../assets/images/logo.png';
import { Container, Logo, Carrinho } from './styles';

export default function ActionBar() {
  return (
    <Container>
      <Logo>
        <Image source={ImgLogo} resizeMode="contain" />
      </Logo>
      <Carrinho />
    </Container>
  );
}
