import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import facom from '../../assets/gallery/facom.png';
import proexc from '../../assets/gallery/proexc.png';
import ufu from '../../assets/gallery/ufu.png';

const CentralDiv = styled.div`
    h1{
        text-align: center;
        font-size: 2.5rem;
        font-weight: 700;
        padding: 1rem;
    }

    @media (max-width: 480px) {
        h1{
            font-size: 1.5rem;
        }
    
    }
`;

const GalleryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    margin-bottom: 2rem;    
`;

const SponsorLogo = styled.img`
    width: 200px;
    height: 100px;
    object-fit: contain;
    background-color: white; 
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 200px;
        height: 100px;
    }

    @media (max-width: 480px) {
        width: 140px;
        height: 70px;
    }
`;

export default function Gallery() {

    const supporters = [
        { name: 'Facom', logo: facom },
        { name: 'Robótica', logo: logo },
        { name: 'UFU', logo: ufu },
        { name: 'Proexc', logo: proexc }
    ];

    return (
        <CentralDiv>
            <h1>Parceiros</h1>
            < GalleryContainer >

                {
                    supporters.map((supporter, index) => (
                        <SponsorLogo src={supporter.logo} alt={supporter.name} key={index} />
                    ))
                }
            </GalleryContainer>
        </CentralDiv>
    )
}
