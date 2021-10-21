import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import Search from './Search'

/**
 * Función para mostrar el menú, modal y buscador
 * @returns Navbar
 */

const Navbar = () => {
    /**
     * Arreglo de las opciones del menu de navegación
     */
    const MenuData = [
        {
            title: 'Conócenos',
            path: '/us'
        },
        {
            title: 'Cursos',
            path: '/courses',
        },
        {
            title: 'Foro',
            path: '/forum',
        },
        {
            title: 'Bolsa de trabajo',
            path: '/job',
        },
        {
            title: 'Inscríbete',
            path: '/signup',
        },
        {
            title: 'Iniciar Sesión',
            path: '/login',
        },
    ];

    const [click, setClick] = useState(false)
    const [clickButtonSearch, setClickButtonSearch] = useState(false)
    const [clickButtonModal, setClickButtonModal] = useState(false)

    //Función para cambiar el icono cerrar/abrir menú
    const handleClick = () => setClick(!click)
    const handleClickSearch = () => setClickButtonSearch(!clickButtonSearch)
    const handleClickModal = () => setClickButtonModal(!clickButtonModal)

    const closeMobileMenu = () => setClick(false)
    const closeModal = () => setClickButtonModal(false)
    
    return (
        <>
            <nav>
                <div className="container">
                    <div className="mobile-icons">
                        <Link to='/' className='logo' title="Ir al home">
                            <img src={Logo} alt="Logo Capacítate para el empleo" />
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                    </div>
                    <div className={click ? 'menu active' : 'menu'}>
                        <ul>
                            <li className='house-icon'>
                                <Link to='/' title="Ir al home">
                                    <i className="fas fa-home"></i>
                                </Link>
                            </li>

                            {MenuData.map((item, index) => {
                                return(
                                    <li key={index} className='nav-item'>
                                        <Link to={item.path} title={item.title} onClick={closeMobileMenu}>
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="icons">
                            <div className="help-icon">
                                <span onClick={handleClickModal}>
                                    <i className="fas fa-question" ></i>
                                </span>
                            </div>
                            <div className="search-icon">
                                <span onClick={handleClickSearch}>
                                    <i className={clickButtonSearch ? 'fas fa-times': 'fas fa-search'}></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={clickButtonSearch ? 'search-container active' : 'search-container'}>
                <div className="container">
                    <Search/>
                </div>
            </div>
            <div className={clickButtonModal ? 'modal-container open' : 'modal-container'}>
                <div className="modal-custom">
                    <span className='close-icon' onClick={closeModal}>
                        <i className="fas fa-times"></i>
                    </span>
                    <div className="header">
                        <h5>Ayuda</h5>
                    </div>
                    <div className="body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, delectus repudiandae dolorem exercitationem nulla cum blanditiis id, in consequuntur ipsam non, recusandae cumque hic ea! Sit quos corporis necessitatibus nulla.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
