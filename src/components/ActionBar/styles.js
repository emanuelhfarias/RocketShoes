import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  background: #141419;
`;

export const Logo = styled.Image`
  margin-left: 10px;
  height: 25px;
  width: 210px;
`;

export const Carrinho = styled.Image`
  width: 48px;
  height: 48px;
  background: red;
`;
