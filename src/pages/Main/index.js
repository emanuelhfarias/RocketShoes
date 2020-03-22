import React, { Component } from 'react';
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

class Main extends Component {
  state = {
    shoes: [],
  };

  async componentDidMount() {
    const { shoes } = this.state;
    const response = await api.get('products');
    this.setState({ shoes: [...shoes, ...response.data] });
  }

  renderItem = ({ item, index }) => {
    const { addToCartRequest, amount } = this.props;

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

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
