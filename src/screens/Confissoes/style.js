import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #E1F7FF;
`;

export const Header = styled.View`
  width: 100%;
  height: 150px;
  background-color: #65A5B8;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  justify-content: space-evenly;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 38px;
  color: #1A3038;
  font-family: 'Roboto-Bold';
  text-align: center;
`;

export const FilterInput = styled.TextInput`
  width: 80%;
  height: 50px;
  background-color: #FFF;
  align-self: center;
  border-radius: 30px;
  padding: 10px;
  bottom: -30px;
  font-size: 18px;
  font-family: 'Roboto-Regular';
  color: gray;
`;

export const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const Icon = styled.TouchableOpacity`
  background-color: #6AC2E2;
  padding: 10px;
  border-radius: 99px;
  bottom: -30px;
`;

export const Body = styled.ScrollView`
  margin-top: 13px;
  flex: 1;
`;

export const ContainerDay = styled.View`
  margin-top: 20px;
  padding: 10px;
`;

export const TitleDay = styled.Text`
  font-size: 28px;
  color: #1A3038;
  font-family: 'Roboto-Bold';
  text-align: left;
`;

export const CardContainer = styled.ScrollView``;

export const CardArea = styled.View`
  background-color: #6AC2E2;
  width: 250px;
  height: 280px;
  margin-top: 20px;
  margin-left: 10px;
  border-radius: 15px;
`;
