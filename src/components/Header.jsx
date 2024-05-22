import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

const StyledHeader = styled.div`
    background-color: #111419;    
    padding: 1.5rem 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 730px) {
        padding: 1.5rem 4rem;
    }
`;

const Logo = styled.div`
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
        display: ${props => (props.isMenuOpen ? 'none' : 'flex')};
    }
`;

const NavList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    
    @media screen and (max-width: 730px) {
        display: none;               
    }
`;

const NavItem = styled.li`
    margin: 0 15px;

    @media screen and (max-width: 730px) {
        padding-top: 1.2rem;
        list-style: none;    
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 1.15rem;
    color: ${props => props.active ? '#F3C509' : '#fff'};
    font-weight: 400;
    transition: all 0.4s;

    &:hover {
        color: #C49A07;
    }
`;

const LoginButton = styled.div`
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

const MobileMenuIcon = styled.div`
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

const MobileMenu = styled.div`
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

const MobileMenuContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
`;

export default function Header() {
    const location = useLocation();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <StyledHeader>
            <Logo isMenuOpen={isMobileMenuOpen}>
                <Link to="/">
                    <img src={logo} alt="logo2" />
                </Link>
                <nav>Robótica</nav>
            </Logo>
            <NavList>
                <NavItem>
                    <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/about" active={location.pathname === '/about'}>Sobre Nós</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/projects" active={location.pathname === '/projects'}>Projetos</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contact" active={location.pathname === '/contact'}>Contato</NavLink>
                </NavItem>
            </NavList>
            <LoginButton>
                <button><Link to="/login">Entrar</Link></button>
            </LoginButton>
            <MobileMenuIcon>
                <button onClick={toggleMobileMenu}>
                    <img className="icon" src={isMobileMenuOpen ? close : menu} alt="menu-icon" />
                </button>
            </MobileMenuIcon>
            <MobileMenu open={isMobileMenuOpen}>
                <MobileMenuContent>
                    <NavItem>
                        <NavLink to="/" active={location.pathname === '/'} onClick={toggleMobileMenu}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/about" active={location.pathname === '/about'} onClick={toggleMobileMenu}>Sobre Nós</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/projects" active={location.pathname === '/projects'} onClick={toggleMobileMenu}>Projetos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contact" active={location.pathname === '/contact'} onClick={toggleMobileMenu}>Contato</NavLink>
                    </NavItem>
                    <LoginButton>
                        <button><Link to="/login" onClick={toggleMobileMenu}>Entrar</Link></button>
                    </LoginButton>
                </MobileMenuContent>
            </MobileMenu>
        </StyledHeader>
    );
}
