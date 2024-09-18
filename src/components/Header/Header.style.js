import styled from 'styled-components';

export const StyledHeader = styled.div`
    background-color: #111419;    
    padding: 1.5rem 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 730px) {
        padding: 1.5rem 4rem;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 70px;
        height: 70px;
    }    

    nav {
        font-size: 2rem;
        color: #fff;
    }

    @media screen and (max-width: 730px) {
        display: ${props => (props.$isMenuOpen ? 'none' : 'flex')};
    }
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    
    @media screen and (max-width: 730px) {
        display: none;               
    }
`;

export const NavItem = styled.li`
    margin: 0 15px;

    @media screen and (max-width: 730px) {
        padding-top: 1.2rem;
        list-style: none;    
    }
`;

export const LoginButton = styled.div`
    @media screen and (max-width: 730px) {
        display: none;
    }

    button {
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
            font-size: 1.1rem;
        }
    }
`;

export const MobileMenuIcon = styled.div`
    display: none;

    @media screen and (max-width: 730px) {
        display: block;
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`;

export const MobileMenu = styled.div`
    display: ${props => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    text-align: center;
    padding: 1rem;    
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;    
    background-color: #111419;    
    align-items: center;

    @media screen and (min-width: 731px) {
        display: none;
    }
`;

export const MobileMenuContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
`;
