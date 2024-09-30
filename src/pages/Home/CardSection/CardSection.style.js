import styled from 'styled-components';

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
