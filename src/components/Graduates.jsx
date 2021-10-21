import React from 'react'
import Title from './Title'
import CourseCard from './CourseCard'
import ImageGraduates from '../assets/images/diplomado.png'

/**
 * Función para mostrar la sección de Diplomados
 * @returns Graduates
 */

function Graduates() {
    return (
        <section className='graduates'>
            <div className="container">
                <Title color='diplomado' title='Diplomados'></Title>
                <div className="graduates-list">
                    <CourseCard title='Diplomado Técnico en Sistemas Informáticos' link='/' image={ImageGraduates}/>
                    <CourseCard title='Diplomado Técnico en Integridad Web' link='/' image={ImageGraduates}/>
                </div>
                <h5>Próximamente</h5>
                <div className="graduates-list disabled">
                    <CourseCard title='Desarrollo de estrategias digitales de aprendizaje' link='/' image={ImageGraduates}/>
                    <CourseCard title='Diplomado Técnico en Big Data' link='/' image={ImageGraduates}/>
                    <CourseCard title='Desarrollo de plataformas y herramientas dígitales' link='/' image={ImageGraduates}/>
                    <CourseCard title='Gestión de Ambientes Virtuales de Aprendizaje' link='/' image={ImageGraduates}/>
                </div>
            </div>
        </section>
    )
}

export default Graduates
