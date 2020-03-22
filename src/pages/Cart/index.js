import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalPrice, product) => {
        return totalPrice + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
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
            <DeleteButtonIcon
              onPress={() => dispatch(CartActions.removeFromCart(product.id))}
            />
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
      {cart.length === 0 ? (
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
