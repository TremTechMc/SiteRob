import styled from 'styled-components';

export const ContainerDiv = styled.div`
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
    }
`;