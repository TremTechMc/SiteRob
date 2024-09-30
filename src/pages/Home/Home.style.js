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

export const ContainerDiv2 = styled.div`
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
        padding-bottom: 2rem;
        height: auto;     
        
        h1{
            font-size: 1.5rem;
            margin-top: 0;
            text-align: center;
            margin-left: 10px;
            margin-right: 10px;
        }
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    

    @media screen and (max-width: 730px) {  
        flex-direction: column; 
        justify-content: center;       
        align-items: center;
    }
`;

export const ContainerDiv3 = styled.div`
    background-color: #111419;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;  
    
    @media screen and (max-width: 730px) {  
        height: auto;
        flex-direction: column;
    }
`;

export const ImageDivHand = styled.div`

    width: 40%;

    img{
        width: 88%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }    

    @media screen and (max-width: 730px) {  
        width: 80%; 
    }
`;

export const ContainerDiv4 = styled.div`
    background-color: #fff;
    height: 55vh;
    display: flex;
    align-items: center;
    justify-content: center; 
    
    @media screen and (max-width: 730px) {  
        height: auto;              
    }
`;

export const InnerContainer = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;    

    @media screen and (max-width: 730px) { 
        flex-direction: column;           
        display: flex;
        justify-content: center;
        align-items: center;    
    }
`;


export const TextDiv2 = styled.div`
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

    @media screen and (max-width: 730px) {  
        width: 100%; 
    }
`;

export const ImageDiv2 = styled.div`
    width: 35%; 

    img{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }    

    @media screen and (max-width: 730px) {  
        padding-top: 3rem;
        width: 80%; 
    }
`;

export const ContainerDiv5 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    ;
    height: 50vh;

    @media screen and (max-width: 730px) {  
        height: auto;              
        padding-top: 3rem;        
        padding-bottom: 1rem;
    }
`;

export const CardContainerDiv = styled.div`
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

    @media screen and (max-width: 730px) {  
        height: auto;   
        flex-direction: column;         

        img{      
            width: 70%;  
            margin-bottom: 0;
        }
    }
`;