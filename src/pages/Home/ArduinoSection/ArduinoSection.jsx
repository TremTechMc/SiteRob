import React from 'react'
import arduino from '../../../assets/arduino-mega.png';
import { ContainerDiv, CardContainerDiv, TextDiv } from './ArduinoSection.style';

export default function ArduinoSection() {
    return (
        <ContainerDiv>
            <CardContainerDiv>
                <img src={arduino} alt="Arduino Mega" />
                <TextDiv>
                    <h1>Arduino</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni perspiciatis consectetur eum est, in fugiat suscipit velit libero exercitationem beatae soluta placeat laborum illum odit, atque, ratione accusantium ipsam quod magnam repudiandae officia! Distinctio, rerum quae ratione necessitatibus dolores accusamus sit nam quas id molestias officia rem modi debitis aut.</p>
                </TextDiv>
            </CardContainerDiv>
        </ContainerDiv>
    )
}
