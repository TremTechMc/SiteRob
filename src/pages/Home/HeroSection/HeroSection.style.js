import styled from 'styled-components';

export const ContainerDiv = styled.div`
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

export const TextDiv = styled.div`
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
        padding: 0;

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

export const ImageDiv = styled.div`
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