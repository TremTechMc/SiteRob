import React from 'react'
import { ContainerDiv, ImageDivHand, TextDiv } from './ContainerSection.style';
import mao from '../../../assets/mao.png';

export default function ContainerSection() {
    return (
        <div>
            <ContainerDiv>
                <ImageDivHand>
                    <img src={mao} alt="Mão" />
                </ImageDivHand>
                <TextDiv>
                    <h1>Mão mecânica</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ducimus possimus voluptatem libero assumenda? Consequuntur excepturi odit provident vel, inventore id voluptatem minus quos voluptas voluptatum beatae architecto illo vitae, esse omnis ab aliquam fugiat distinctio maxime non? Ut, suscipit.</p>
                </TextDiv>
            </ContainerDiv>
        </div>
    )
}
