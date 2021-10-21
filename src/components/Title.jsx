import React from 'react'

/**
 * Componente para crear títulos de las secciones
 * @param {string} color Color del fondo del título
 * @param {string} title Título de la sección
 * @returns Title
 */

const Title = ({color, title}) => {
    return (
        <div className={`title ${color}`}>
            <h3>{title}</h3>
        </div>
    )
}

export default Title
