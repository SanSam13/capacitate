import React from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

/**
 * Función para mostrar el header del sitio
 * @returns Header
 */

const Header = () => {
    return (
        <header>
            <Link to='/' className='logo' title="Ir al home">
                <img src={Logo} alt="Logo Capacítate para el empleo" />
            </Link>
            <Navbar></Navbar>
        </header>
    )
}

export default Header
