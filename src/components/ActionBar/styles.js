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
  height: 25px;
  width: 210px;
`;

export const Carrinho = styled(Icon)`
  color: #fff;
  margin-right: 15px;
`;
