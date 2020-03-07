import React from 'react';

import ImgLogo from '../../assets/images/logo.png';
import { Container, Logo, Carrinho } from './styles';

export default function ActionBar() {
  return (
    <Container>
      <Logo source={ImgLogo} />
      <Carrinho name="shopping-basket" size={28} />
    </Container>
  );
}
