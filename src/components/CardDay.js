import React from 'react';
import styled from 'styled-components';

const CardArea = styled.View`
  background-color: #6AC2E2;
  width: 300px;
  margin-top: 20px;
  margin-left: 10px;
  border-radius: 15px;
  padding: 10px;
  justify-content: space-between;
`;

const NameParoquia = styled.Text`
    font-size: 22px;
    font-family: 'Roboto-Bold';
    color: #E1F7FF;
`;
const Horarios = styled.Text`
    color: #E1F7FF;
    font-size: 18px;
`;
const HorariosArea = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
`;
const TagHorario = styled.View`
    background-color: #1A3038;
    width: 60px;
    padding: 2px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: 3px;
`;
const InfoArea = styled.View`
    margin-top: 20px;
`;
const TitleCard = styled.Text`
    font-size: 20px;
    font-family: 'Roboto-Bold';
    color: #1A3038;
`;
const SubTitleCard = styled.Text`
    color: #E1F7FF;
    font-size: 18px;
`;

export default () => {
    return (
        <CardArea>
            <NameParoquia>São Gonçalo</NameParoquia>

            <InfoArea>
                <TitleCard>Zona: <SubTitleCard>Leste</SubTitleCard></TitleCard>
                <TitleCard>Bairro: <SubTitleCard>Castelo Branco</SubTitleCard></TitleCard>

                <HorariosArea>
                    <TitleCard>Horários:</TitleCard>
                    <TagHorario>
                        <Horarios>12:00</Horarios>
                    </TagHorario>
                    <TagHorario>
                        <Horarios>12:00</Horarios>
                    </TagHorario>
                    <TagHorario>
                        <Horarios>12:00</Horarios>
                    </TagHorario>
                    <TagHorario>
                        <Horarios>12:00</Horarios>
                    </TagHorario>
                </HorariosArea>
            </InfoArea>
        </CardArea>
    )
}