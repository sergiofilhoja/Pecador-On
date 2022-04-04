import React from 'react';

import SearchIcon from '../../assets/magnify.svg';

import {
  Container,
  Header,
  HeaderText,
  FilterInput,
  InputArea,
  Icon,
  Body,
  ContainerDay,
  TitleDay,
  CardContainer,
  CardArea
} from './style';

export default () => {
  return (
    <Container>
      <Header>
        <HeaderText>Confissões</HeaderText>
        <InputArea>
          <FilterInput 
            placeholder="Digite o nome da paróquia..."
          />
          <Icon>
            <SearchIcon fill="#1A3038" width="30" height="30" />
          </Icon>
        </InputArea>
      </Header>
      
      <Body>

        <ContainerDay>
          <TitleDay>Segunda</TitleDay>

          <CardContainer horizontal={true} >
            <CardArea />
            <CardArea />
            <CardArea />
            <CardArea />
          </CardContainer>
        </ContainerDay>

        <ContainerDay>
          <TitleDay>Terça</TitleDay>

          <CardContainer horizontal={true} >
            <CardArea />
            <CardArea />
            <CardArea />
            <CardArea />
          </CardContainer>
        </ContainerDay>

        <ContainerDay>
          <TitleDay>Quarta</TitleDay>

          <CardContainer horizontal={true} >
            <CardArea />
            <CardArea />
            <CardArea />
            <CardArea />
          </CardContainer>
        </ContainerDay>

        <ContainerDay>
          <TitleDay>Quinta</TitleDay>

          <CardContainer horizontal={true} >
            <CardArea />
            <CardArea />
            <CardArea />
            <CardArea />
          </CardContainer>
        </ContainerDay>

        <ContainerDay>
          <TitleDay>Sexta</TitleDay>

          <CardContainer horizontal={true} >
            <CardArea />
            <CardArea />
            <CardArea />
            <CardArea />
          </CardContainer>
        </ContainerDay>

        <ContainerDay>
          <TitleDay>Sábado</TitleDay>

          <CardContainer horizontal={true} >
            <CardArea />
            <CardArea />
            <CardArea />
            <CardArea />
          </CardContainer>
        </ContainerDay>

        <ContainerDay>
          <TitleDay>Domingo</TitleDay>

          <CardContainer horizontal={true} >
            <CardArea />
            <CardArea />
            <CardArea />
            <CardArea />
          </CardContainer>
        </ContainerDay>
      </Body>
    </Container>
  )
}
