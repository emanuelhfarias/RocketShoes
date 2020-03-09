import React, { Component } from 'react';

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
    shoes: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
        id: 3,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 219.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
    ],
  };

  renderItem = ({ item, index }) => {
    return (
      <Product key={index}>
        <ProductImage source={{ uri: item.image }} />
        <Title>{item.title}</Title>
        <Price>R$ {item.price}</Price>
        <BuyButton>
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

export default Main;
