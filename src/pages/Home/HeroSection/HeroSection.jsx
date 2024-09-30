import React from 'react'
import { Link } from 'react-router-dom';
import { ContainerDiv, TextDiv, ImageDiv } from './HeroSection.style'
import walle from '../../../assets/wall.png';

export default function HeroSection() {
    return (
        <div>
            <ContainerDiv>
                <TextDiv>
                    <h1>Bem-vindo ao Site de Robótica da Nossa Faculdade!</h1>
                    <p>Explore o fascinante mundo da robótica com a gente! Nosso projeto principal é um robô inspirado no Wall-E, desenvolvido com motores, Arduino, sensores e peças impressas em 3D. Este robô não é apenas uma réplica visual, mas também uma demonstração das nossas habilidades em programação, eletrônica e engenharia mecânica. Navegue pelo site para descobrir detalhes do projeto, conhecer a equipe por trás da criação e ver como transformamos teoria em prática. Acompanhe nossas atualizações e inspire-se com nossas inovações no campo da robótica!</p>
                    <button><Link to="/">Saber Mais</Link></button>
                </TextDiv>
                <ImageDiv>
                    <img src={walle} alt="Wall-e" />
                </ImageDiv>
            </ContainerDiv>
        </div>
    )
}
