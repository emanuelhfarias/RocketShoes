import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  height: 100%;
  background: #141317;
  padding-top: 20px;
  display: flex;
  align-items: center;
`;

export const Carrinho = styled.ScrollView`
  background: #fff;
  width: 90%;
  border-radius: 4px;
`;

export const ProductList = styled.View``;

export const Product = styled.View`
  padding: 15px;
`;

export const Total = styled.View``;

export const TotalText = styled.Text`
  font-size: 16px;
  color: #999;
  font-weight: bold;
  text-align: center;
`;

export const TotalPrice = styled.Text`
  font-size: 28px;
  text-align: center;
  font-weight: bold;
`;

export const FinalizarButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;

  margin-top: 20px;
  margin-bottom: 15px;
  height: 50px;
  width: 90%;

  background: #7159c1;
  border: 0;
  border-radius: 4px;
`;

export const TextFinalizarButton = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ProductDetails = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ProductInfoText = styled.Text`
  font-size: 14px;
  color: #444;
`;

export const ProductImage = styled.Image`
  width: 90px;
  height: 90px;
`;

export const ProductInfo = styled.View`
  width: 150px;
`;

export const ProductActions = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  background: #ececec;
  border-radius: 3px;
  height: 40px;
`;

export const DeleteButton = styled.TouchableOpacity``;

export const DeleteButtonIcon = styled(Icon).attrs({
  name: 'delete-forever',
  size: 32,
  color: '#7159c1',
})``;

export const SubTotalText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-right: 8px;
`;

export const TextInput = styled.TextInput`
  background: #fff;
  text-align: center;
  height: 30px;
  width: 60px;
  padding: 3px;
  border-radius: 4px;
  border-width: 1px;
  border-color: #ddd;
`;

export const CounterGroup = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100px;
`;

export const ButtonIncrement = styled.TouchableOpacity``;

export const ButtonDecrement = styled.TouchableOpacity``;

export const IconIncrement = styled(Icon).attrs({
  name: 'add-circle-outline',
  size: 18,
  color: '#7159c1',
})`
  padding: 5px;
`;

export const IconDecrement = styled(Icon).attrs({
  name: 'remove-circle-outline',
  size: 18,
  color: '#7159c1',
})`
  padding: 5px;
`;

export const CarinhoEmpty = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  background: #fff;
  width: 90%;
  border-radius: 4px;
  padding: 15px;
`;
