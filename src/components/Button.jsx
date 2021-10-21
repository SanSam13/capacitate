import React from 'react'

/**
 * Componente para crear botón de color por categorías
 * @param {string} category Es el color de la categoría
 * @param {string} text Es el nombre del botón
 * @returns Button
 */

const Button = ({category, text}) => {
    return (
        <div>
            <button type="button" className={`color-btn ${category}`} >{text}</button>
        </div>
    )
}

export default Button