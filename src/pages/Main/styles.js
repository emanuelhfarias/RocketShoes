import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';

export const Container = styled.View`
  height: 100%;
  background: #141317;
  padding-top: 20px;
`;

export const ShoesList = styled(Carousel)`
  color: #fff;
`;

export const Product = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  height: 300px;
  border-radius: 4px;
`;

export const ProductText = styled.Text`
  color: #000;
  padding: 15px;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Title = styled.Text`
  font-size: 18px;
  text-align: center;
  padding: 5px;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const BuyButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 200px;

  background: #7159c1;
  border: 0;
  border-radius: 4px;
`;

export const ButtonInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 60px;
`;

export const ItemCounter = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: normal;
  margin-left: 10px;
`;

export const TextButton = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

export const AddIcon = styled(Icon).attrs({
  name: 'add-shopping-cart',
  size: 21,
  color: 'white',
})``;
