import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ShoesList,
  Product,
  ProductImage,
  Title,
  Price,
  BuyButton,
  TextButton,
  ButtonInfo,
  ItemCounter,
  AddIcon,
} from './styles';

export default function Main() {
  const [shoes, setShoes] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((totalAmount, product) => {
      totalAmount[product.id] = product.amount;
      return totalAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadShoes() {
      const response = await api.get('products');
      setShoes([...shoes, ...response.data]);
    }

    loadShoes();
  }, []);

  const refCarousel = useRef();

  function renderItem({ item, index }) {
    return (
      <Product key={index}>
        <ProductImage source={{ uri: item.image }} />
        <Title>{item.title}</Title>
        <Price>R$ {item.price}</Price>
        <BuyButton
          onPress={() => dispatch(CartActions.addToCartRequest(item.id))}
        >
          <ButtonInfo>
            <AddIcon />
            <ItemCounter>{amount[item.id] || 0}</ItemCounter>
          </ButtonInfo>
          <TextButton>ADICIONAR</TextButton>
        </BuyButton>
      </Product>
    );
  }

  return (
    <Container>
      <ShoesList
        ref={c => {
          refCarousel.current = c;
        }}
        data={shoes}
        renderItem={renderItem}
        sliderWidth={350}
        itemWidth={250}
      />
    </Container>
  );
}
