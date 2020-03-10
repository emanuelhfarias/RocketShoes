import React, { Component } from 'react';

import { Text } from 'react-native';

import {
  Container,
  Carrinho,
  ProductList,
  Product,
  Total,
  TotalText,
  TotalPrice,
  FinalizarButton,
  TextFinalizarButton,
  ProductDetails,
  ProductPrice,
  ProductImage,
  ProductInfo,
  ProductActions,
  DeleteButton,
  ProductInfoText,
  DeleteButtonIcon,
  SubTotalText,
  TextInput,
  CounterGroup,
  ButtonIncrement,
  ButtonDecrement,
  IconIncrement,
  IconDecrement,
} from './styles';

class Cart extends Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        amount: 1,
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
        amount: 1,
      },
    ],
  };

  renderProduct = product => {
    return (
      <Product key={product.id}>
        <ProductDetails>
          <ProductImage source={{ uri: product.image }} />
          <ProductInfo>
            <ProductInfoText>{product.title}</ProductInfoText>
            <ProductPrice>
              <Text>R$ {product.price}</Text>
            </ProductPrice>
          </ProductInfo>
          <DeleteButton>
            <DeleteButtonIcon />
          </DeleteButton>
        </ProductDetails>
        <ProductActions>
          <CounterGroup>
            <ButtonIncrement>
              <IconIncrement />
            </ButtonIncrement>
            <TextInput value="1" />
            <ButtonDecrement>
              <IconDecrement />
            </ButtonDecrement>
          </CounterGroup>
          <SubTotalText>R$ {product.price}</SubTotalText>
        </ProductActions>
      </Product>
    );
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <Carrinho>
          <ProductList>
            {products.map(product => this.renderProduct(product))}
          </ProductList>
          <Total>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>R$ 179,90</TotalPrice>
          </Total>
          <FinalizarButton>
            <TextFinalizarButton>Finalizar Pedido</TextFinalizarButton>
          </FinalizarButton>
        </Carrinho>
      </Container>
    );
  }
}

export default Cart;
