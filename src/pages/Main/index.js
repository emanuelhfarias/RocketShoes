import React, { Component } from 'react';
import { connect } from 'react-redux';

import api from '../../services/api';

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

class Main extends Component {
  state = {
    shoes: [],
  };

  async componentDidMount() {
    const { shoes } = this.state;
    const response = await api.get('products');
    this.setState({ shoes: [...shoes, ...response.data] });
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  renderItem = ({ item, index }) => {
    return (
      <Product key={index}>
        <ProductImage source={{ uri: item.image }} />
        <Title>{item.title}</Title>
        <Price>R$ {item.price}</Price>
        <BuyButton onPress={() => this.handleAddProduct(item)}>
          <ButtonInfo>
            <AddIcon />
            <ItemCounter>0</ItemCounter>
          </ButtonInfo>
          <TextButton>ADICIONAR</TextButton>
        </BuyButton>
      </Product>
    );
  };

  render() {
    const { shoes } = this.state;
    return (
      <Container>
        <ShoesList
          ref={c => {
            this._carousel = c;
          }}
          data={shoes}
          renderItem={this.renderItem}
          sliderWidth={350}
          itemWidth={250}
        />
      </Container>
    );
  }
}

export default connect()(Main);
