import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const LogoArea = styled.View`
  top: 150px;
`;

export const LogoApp = styled.Image`
`;

export const BoxArea = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const BoxContainer = styled.TouchableOpacity`
  background-color: #65A5B8;
  width: 150px;
  height: 150px;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
`

export const TextBoxContainer = styled.Text`
  color: #FFF;
  font-size: 22px;
  font-family: 'Roboto-Regular';
`