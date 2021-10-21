import React from 'react'

/**
 * Componente para crear tarjeta de pasos de colores del home
 * @param {string} color Nombre de la categoria para asignarle un color
 * @param {string} number Número del paso
 * @param {string} title  Título del paso a seguir
 * @param {string} subtitle Subtítulo del paso
 * @returns StepsCard
 */

const StepsCard = ({color, number, title, subtitle}) => {
    return (
        <div className={`card-step ${color}`}>
            <span>{number}</span>
            <h4>{title}</h4>
            <p>{subtitle}</p>
        </div>
    )
}

export default StepsCard
