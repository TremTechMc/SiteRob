import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.svg';
import close from '../../assets/close.svg';
import { StyledHeader, Logo, NavList, NavItem, LoginButton, MobileMenuIcon, MobileMenu, MobileMenuContent } from './Header.style';

const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 1.15rem;
    color: ${props => props.$active === 'true' ? '#F3C509' : '#fff'};
    font-weight: 400;
    transition: all 0.4s;

    &:hover {
        color: #C49A07;
    }
`;

export default function Header() {
    const location = useLocation();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <StyledHeader>
            <Logo $isMenuOpen={isMobileMenuOpen}>
                <Link to="/">
                    <img src={logo} alt="logo2" />
                </Link>
                <nav>Robótica</nav>
            </Logo>
            <NavList>
                <NavItem>
                    <NavLink to="/" $active={location.pathname === '/' ? 'true' : 'false'}>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/about" $active={location.pathname === '/about' ? 'true' : 'false'}>Sobre Nós</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/projects" $active={location.pathname === '/projects' ? 'true' : 'false'}>Projetos</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contact" $active={location.pathname === '/contact' ? 'true' : 'false'}>Contato</NavLink>
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
                        <NavLink to="/" $active={location.pathname === '/' ? 'true' : 'false'} onClick={toggleMobileMenu}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/about" $active={location.pathname === '/about' ? 'true' : 'false'} onClick={toggleMobileMenu}>Sobre Nós</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/projects" $active={location.pathname === '/projects' ? 'true' : 'false'} onClick={toggleMobileMenu}>Projetos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contact" $active={location.pathname === '/contact' ? 'true' : 'false'} onClick={toggleMobileMenu}>Contato</NavLink>
                    </NavItem>
                    <LoginButton>
                        <button><Link to="/login" onClick={toggleMobileMenu}>Entrar</Link></button>
                    </LoginButton>
                </MobileMenuContent>
            </MobileMenu>
        </StyledHeader>
    );
}
