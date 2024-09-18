import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const FooterDiv = styled.footer`
    width: 100%;
    color: #fff;
    box-sizing: border-box;
    letter-spacing: 1px;
`;

const FooterContent = styled.div`
    background-color: #111419;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 3rem 3.5rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
}

    @media screen and (max-width: 426px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 3rem 2rem;
    }
`;

const FooterContacts = styled.div`
    h1 {
        margin-bottom: 0.75rem;
    }

    img{
        width: 80px;
        height: 80px;          
    }
`;

const FooterSocialMedia = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.5rem;
        width: 2.5rem;
        color: #fff;
        border-radius: 50%;
        transition: all 0.4s;

        i {
        font-size: 1.25rem;
        }

        &:hover {
        opacity: 0.8;
        }
    }   
    
    li{
        list-style: none;
        color: #F3C509;
    }
`;

const FooterList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    list-style: none;

    a {
        color: #fff;
        text-decoration: none;
        transition: all 0.4s;

        &:hover {
        color: #F3C509;
        }
    }
`;

const FooterSubscribe = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    p {
        color: #fff;
    }
`;

const InputGroup = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;

    input {
        all: unset;
        padding: 0.75rem;
        width: 100%;
    }

    button {
        background-color: #F3C509;
        border: none;
        color: #111419;
        padding: 0px 1.25rem;
        font-size: 1.25rem;
        height: 100%;
        border-radius: 0px 4px 4px 0px;
        cursor: pointer;
        transition: all 0.4s;

        &:hover {
        opacity: 0.8;
        }

        i {
        font-size: 1.25rem;
        }
    }
`;

const Line = styled.div`
    width: 100%;
    height: 2px;  
    background-color: white;  
    margin: 0.5px 0;  
`;

const FooterCopyright = styled.div`
    display: flex;
    justify-content: center;
    background-color: #111419;
    font-size: 0.9rem;
    padding: 1.5rem;
    font-weight: 100;
    color: #fff;
`;

const Footer = () => {
    return (
        <FooterDiv>
            <FooterContent>
                <FooterContacts>
                    <img src={logo} alt="logo2" />
                    <p>Laboratório de Robótica</p>
                    <FooterSocialMedia>
                        <a href="https://www.instagram.com/" id="instagram">
                            <li><FaFacebook /></li>
                        </a>
                        <a href="https://facebook.com/" id="facebook">
                            <li><FaInstagram /></li>
                        </a>
                        <a href="https://web.whatsapp.com/" id="whatsapp">
                            <li><FaWhatsapp /></li>
                        </a>
                    </FooterSocialMedia>
                </FooterContacts>
                <FooterList>
                    <li><h3>Links</h3></li>
                    <li><a href="index.php">Home</a></li>
                    <li><a href="sobrenos.php">Sobre Nós</a></li>
                    <li><a href="projetos.php">Projetos</a></li>
                    <li><a href="contato.php">Contato</a></li>
                </FooterList>
                <FooterList>
                    <li>Rodovia LMG 746, Km 1</li>
                    <li>Monte Carmelo - MG</li>
                    <li>Telefone: (34) 3810-1044</li>
                </FooterList>
                <FooterSubscribe>
                    <h3>Inscreva-se</h3>
                    <p>Digite seu e-mail para ser notificado sobre nossas novas atualizações</p>
                    <InputGroup>
                        <input type="email" id="email" />
                        <button><FaEnvelope /></button>
                    </InputGroup>
                </FooterSubscribe>
            </FooterContent>
            <Line />
            <FooterCopyright>
                &#169; 2024 Robótica. Todos os direitos reservados
            </FooterCopyright>
        </FooterDiv>
    );
};

export default Footer;
