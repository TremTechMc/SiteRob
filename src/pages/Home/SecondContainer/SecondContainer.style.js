import styled from 'styled-components';

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