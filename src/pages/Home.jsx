import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/Card/Card';
import walle from '../assets/wall.png';
import img1 from '../assets/imgCards/1.jpg';
import img2 from '../assets/imgCards/2.jpg';
import img3 from '../assets/imgCards/3.jpg';
import mao from '../assets/mao.png';
import arduino from '../assets/arduino-mega.png';
import robozinho from '../assets/robozinho.png';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery/Gallery';

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

const ContainerDiv2 = styled.div`
    background-color: #e0b509;   
    padding-top: 2rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        color: #fff;        
    }

    @media screen and (max-width: 730px) {  
        margin-top: 0;   
        height: auto;
        display: flex;
        flex-direction: column;        
        align-items: center;        
    }
`;

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
`;

const ContainerDiv3 = styled.div`
    background-color: #111419;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;    
`;

const ImageDivHand = styled.div`

    width: 40%;

    img{
        width: 88%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }    
`;

const ContainerDiv4 = styled.div`
    background-color: #fff;
    height: 55vh;
    display: flex;
    align-items: center;
    justify-content: center;  
`;

const InnerContainer = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
`;


const TextDiv2 = styled.div`
    width: 35%;   

    h1, h2, p, ul{
        padding-top: 0.75rem;
    }

    ul{
        padding-left: 10px;
    }

    li{
        margin-left: 10px;    
    }
`;

const ImageDiv2 = styled.div`
    width: 35%; 

    img{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }    
`;

const ContainerDiv5 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    ;
    height: 50vh;
`;

const CardContainerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;  
    width: 70%;
    height: 40vh;
    background-color:#e4c54c;
    color: #fff;
    border-radius: 20px;

    img{
        width: 45%;
        height: auto;
        margin-bottom: 7rem;
    }
`;

export default function Home() {
    return (
        <div>
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
            <ContainerDiv2>
                <h1>Trabalhamos com diversos tipos de projetos</h1>
                <CardsContainer>
                    <Card image={img1} title="Carro com Arduino" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
                    <Card image={img2} title="Robótica com sensores" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
                    <Card image={img3} title="Robótica com Raspberry" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
                </CardsContainer>
            </ContainerDiv2 >
            <ContainerDiv3>
                <ImageDivHand>
                    <img src={mao} alt="Mão" />
                </ImageDivHand>
                <TextDiv>
                    <h1>Mão mecânica</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ducimus possimus voluptatem libero assumenda? Consequuntur excepturi odit provident vel, inventore id voluptatem minus quos voluptas voluptatum beatae architecto illo vitae, esse omnis ab aliquam fugiat distinctio maxime non? Ut, suscipit.</p>
                </TextDiv>
            </ContainerDiv3>
            <ContainerDiv4>
                <InnerContainer>
                    <TextDiv2>
                        <h1>Nossos projetos oferecidos</h1>
                        <p>O objetivo deste projeto de extensão é capacitar os alunos do ensino médio e fundamental II da cidade de Monte Carmelo-MG no desenvolvimento de soluções baseadas em robótica envolvendo programação e design de hardware, buscando constribuir no processo de ensino aprendizagem e despertando o interesse pela área da computação.</p>
                        <h2>Horários</h2>
                        <p>Terça e Quinta: 17h00 às 18h30 - Turma 1</p>
                        <h2>Tecnologias</h2>
                        <ul>
                            <li>ThinkerCad</li>
                            <li>Plataforma</li>
                            <li>Arduino</li>
                            <li>Arduino IDE</li>
                        </ul>
                    </TextDiv2>
                    <ImageDiv2>
                        <img src={robozinho} alt="Robozinho" />
                    </ImageDiv2>
                </InnerContainer>
            </ContainerDiv4>
            <ContainerDiv5>
                <CardContainerDiv>
                    <img src={arduino} alt="Arduino Mega" />
                    <TextDiv>
                        <h1>Arduino</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni perspiciatis consectetur eum est, in fugiat suscipit velit libero exercitationem beatae soluta placeat laborum illum odit, atque, ratione accusantium ipsam quod magnam repudiandae officia! Distinctio, rerum quae ratione necessitatibus dolores accusamus sit nam quas id molestias officia rem modi debitis aut.</p>
                    </TextDiv>
                </CardContainerDiv>
            </ContainerDiv5>
            <Gallery />
            <Footer />
        </div >
    );
}
