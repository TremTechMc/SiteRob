import React from 'react'
import { ContainerDiv2, CardsContainer } from './CardSection.style';
import Card from '../../../components/Card/Card';
import img1 from '../../../assets/imgCards/1.jpg';
import img2 from '../../../assets/imgCards/2.jpg';
import img3 from '../../../assets/imgCards/3.jpg';

export default function CardSection() {
    return (
        <div>
            <ContainerDiv2>
                <h1>Trabalhamos com diversos tipos de projetos</h1>
                <CardsContainer>
                    <Card image={img1} title="Carro com Arduino" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
                    <Card image={img2} title="Robótica com sensores" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
                    <Card image={img3} title="Robótica com Raspberry" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
                </CardsContainer>
            </ContainerDiv2 >
        </div>
    )
}
