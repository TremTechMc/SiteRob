import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
    margin: 1rem;
    flex: 1;
    width: 300px;

    img {
        width: 100%;        
        height: auto;
    }

    h2 {
        font-size: 1.5rem;
        margin: 1rem 0;
        color: #333;
    }

    p {
        font-size: 1rem;
        color: #666;
        padding: 0 1rem;
        margin-bottom: 1rem;
    }

    button {
        border: none;
        background-color: #111419;
        border-radius: 30px;
        padding: 10px 20px;
        font-size: 1rem;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        margin-bottom: 1rem;
        transition: background 0.3s;

        &:hover {
            background-color: #e0b509;
        }
    }
`;

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
