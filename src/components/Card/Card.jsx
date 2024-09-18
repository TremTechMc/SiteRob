import React from 'react'
import { CardContainer } from './Card.style'

export default function Card({ image, title, description }) {
    return (
        <CardContainer>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <button>Saiba mais</button>
        </CardContainer>
    )
}
