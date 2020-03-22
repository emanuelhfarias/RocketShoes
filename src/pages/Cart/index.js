import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Text } from 'react-native';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

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
  CarinhoEmpty,
} from './styles';

function Cart({ updateAmountRequest, removeFromCart, cart, total }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  function renderProduct(product) {
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
            <ButtonDecrement onPress={() => decrement(product)}>
              <IconDecrement />
            </ButtonDecrement>
            <TextInput value={String(product.amount)} keyboardType="numeric" />
            <ButtonIncrement onPress={() => increment(product)}>
              <IconIncrement />
            </ButtonIncrement>
          </CounterGroup>
          <SubTotalText>{product.subtotal}</SubTotalText>
        </ProductActions>
      </Product>
    );
  }

  return (
    <Container>
      {cart.length == 0 ? (
        <CarinhoEmpty>Nenhum item no carrinho</CarinhoEmpty>
      ) : (
        <Carrinho>
          <ProductList>
            {cart.map(product => renderProduct(product))}
          </ProductList>
          <Total>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>{total}</TotalPrice>
          </Total>
          <FinalizarButton>
            <TextFinalizarButton>Finalizar Pedido</TextFinalizarButton>
          </FinalizarButton>
        </Carrinho>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
