import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Text } from 'react-native';
import * as CartActions from '../../store/modules/cart/actions';

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
  renderProduct = product => {
    const { removeFromCart } = this.props;
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
            <DeleteButtonIcon onPress={() => removeFromCart(product.id)} />
          </DeleteButton>
        </ProductDetails>
        <ProductActions>
          <CounterGroup>
            <ButtonIncrement>
              <IconIncrement />
            </ButtonIncrement>
            <TextInput value={String(product.amount)} keyboardType="numeric" />
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
    const { cart } = this.props;
    return (
      <Container>
        <Carrinho>
          <ProductList>
            {cart.map(product => this.renderProduct(product))}
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

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
