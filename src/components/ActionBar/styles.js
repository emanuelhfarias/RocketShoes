import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  background: #141419;
`;

export const Logo = styled.Image`
  margin-left: 15px;
  height: 27px;
  width: 210px;
`;

export const Carrinho = styled(Icon)`
  color: #fff;
  margin-right: 15px;
  margin-top: -15px;
`;

export const Counter = styled.View``;

export const TextCounter = styled.Text`
  text-align: center;
  padding-top: 1px;
  color: white;
  margin-left: 20px;
  background: #9159c1;
  width: 22px;
  height: 22px;
  border-radius: 12px;
  z-index: 1;
`;
