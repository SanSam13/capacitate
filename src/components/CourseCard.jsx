import React from 'react'

/**
 * Componente para crear la tarjeta de los cursos
 * @param {string} title Título del curso
 * @param {string} image Imagen del curso
 * @param {string} link Enlace hacia donde abrirá el curso seleccionado
 * @returns CourseCard
 */

function CourseCard({title, image, link}) {
    return (
        <div className='course-card'>
            <a href='{link}' title={title}>
                <img src={image} alt={title} />
                <p>{title}</p>
            </a>
        </div>
    )
}

export default CourseCard
