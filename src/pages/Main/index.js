import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

function Main({ addToCartRequest, amount }) {
  const [shoes, setShoes] = useState([]);

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
        <BuyButton onPress={() => addToCartRequest(item.id)}>
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

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
