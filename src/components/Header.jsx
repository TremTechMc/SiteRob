import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
    return (
        <div>
            <div>
                <div>
                    <Link to="/">
                        <img src={logo} alt="Home" />
                        <span>Home</span>
                    </Link>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Sobre Nós</Link></li>
                    <li><Link to="/projects">Nossos Projetos</Link></li>
                    <li><Link to="/sign-up">Saber Mais</Link></li>
                </ul>
                <div>
                    <Link to="/sign-up">Sign In</Link>
                </div>
            </div>
        </div>
    )
}