import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'

/**
 * Función para mostrar el footer del sitio
 * @returns Footer
 */

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-container">
                    <div className="logo">
                        <Link to='/' className='logo' title='Ir al home'>
                            <img src={Logo} alt="Logo Capacítate para el empleo" />
                        </Link>
                    </div>
                    <ul className="menu-footer">
                        <li>
                            <Link to='/' title='Aviso de privacidad'>Aviso de privacidad</Link>
                        </li>
                        <li>
                            <Link to='/' title="Términos de uso">Términos de uso</Link>
                        </li>
                        <li>
                            <Link to='/' title="Contáctanos">Contáctanos</Link>
                        </li>
                        <li className='facebook'>
                            <a href="/" target="_blank" title='Ir a Facebook'><i className="fab fa-facebook-square"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
