import React from 'react'
import styled from 'styled-components';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';

const CentralDiv = styled.div`
    background-color: #111419;    
    width: 100%;
    height: 87.2vh;    
`;

export default function SignUp() {
    return (
        <div>
            <Header />
            <CentralDiv>
            </CentralDiv>
            <Footer />
        </div>
    )
}
