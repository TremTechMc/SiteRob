import styled from 'styled-components';

export const ContainerDiv4 = styled.div`
    background-color: #fff;
    padding: 4rem 2rem;  
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 730px) {  
        padding: 2rem 1rem;
    }
`;

export const TextDiv2 = styled.div`
    width: 45%; 
    color: #333; 

    h1 {
        font-size: 2.5rem; 
        font-weight: 700;
        margin-bottom: 1rem;
        color: #2c3e50;
    }

    h2 {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #2c3e50;
    }

    p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
        color: #606c76;
    }

    @media screen and (max-width: 730px) {  
        width: 100%; 
        text-align: center; 
    }
`;

export const InnerContainer = styled.div`
    display: flex;
    width: 80%; 
    justify-content: space-between;    
    padding: 2rem;  
    
    @media screen and (max-width: 730px) { 
        flex-direction: column;
        align-items: center;
        padding: 1.5rem;
    }
`;

export const ImageDiv2 = styled.div`
    width: 45%; 
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 80%; 
        height: auto;
        transition: transform 0.3s ease-in-out;
    }

    img:hover {
        transform: scale(1.05); 
    }

    @media screen and (max-width: 730px) {  
        width: 100%;
        margin-top: 2rem;
    }
`;
