import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import walle from '../assets/wall.png';

const ContainerDiv = styled.div`
    background-color: #111419;    
    width: 100%;
    height: 87.2vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 730px) {  
        margin-top: 0;   
        height: 100vh;
        display: flex;
        flex-direction: column;        
        align-items: center;        
    }
`;

const TextDiv = styled.div`
    width: 50%;
    color: #fff;
    padding: 2rem;
    margin-left: 4%;

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
    }
    
    p {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        font-size: 1.3rem;
        font-weight: 400;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;        
        border: none;
        background-color: #F3C509;        
        border-radius: 30px;
        padding: 10px 20px; 
        transition: background 0.8s;

        &:hover {
            opacity: 0.8;
        }

        a {
            text-decoration: none;
            color: #fff;
            font-weight: 500;
            font-size: 1.3rem;
        }    
    }

    @media screen and (max-width: 730px) {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            font-size: 1.5rem;
            margin-top: 0;
            text-align: center;
        }            

        p {
            font-size: 1rem;  
            text-align: center;
        }

        button {
            margin-top: 1rem;
        }
    }
`;

const ImageDiv = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    img {
        max-width: 85%;
        height: auto;
    }

    @media screen and (max-width: 730px) {
        width: 80%;
    }
`;

export default function Home() {
    return (
        <div>
            <Header />
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
    );
}
