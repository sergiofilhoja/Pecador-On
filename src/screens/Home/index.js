import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  LogoArea,
  LogoApp,
  BoxArea,
  BoxContainer,
  TextBoxContainer
} from './style';

import Logo from '../../assets/logo.png';

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <LogoArea>
        <LogoApp source={Logo} />
      </LogoArea>

      <BoxArea>
        <BoxContainer
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.34,
            shadowRadius: 7.34,

            elevation: 16,
          }}
          onPress={() => navigation.navigate('Missas')}
        >
          <TextBoxContainer>Missas</TextBoxContainer>
        </BoxContainer>

        <BoxContainer
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.34,
            shadowRadius: 7.34,

            elevation: 16,
          }}
          onPress={() => navigation.navigate('Confissoes')}
        >
          <TextBoxContainer>Confissões</TextBoxContainer>
        </BoxContainer>
      </BoxArea>
    </Container>
  )
}
