import React from 'react'
import { ContainerDiv4, InnerContainer, TextDiv2, ImageDiv2 } from './SecondContainer.style';
import robozinho from '../../../assets/robozinho.png';

export default function SecondContainer() {
    return (
        <ContainerDiv4>
            <InnerContainer>
                <TextDiv2>
                    <h1>Nossos projetos oferecidos</h1>
                    <p>O objetivo deste projeto de extensão é capacitar os alunos do ensino médio e fundamental II da cidade de Monte Carmelo-MG no desenvolvimento de soluções baseadas em robótica envolvendo programação e design de hardware, buscando constribuir no processo de ensino aprendizagem e despertando o interesse pela área da computação.</p>
                    <h2>Horários</h2>
                    <p>Terça e Quinta: 17h00 às 18h30 - Turma 1</p>                    
                </TextDiv2>
                <ImageDiv2>
                    <img src={robozinho} alt="Robozinho" />
                </ImageDiv2>
            </InnerContainer>
        </ContainerDiv4>
    )
}
