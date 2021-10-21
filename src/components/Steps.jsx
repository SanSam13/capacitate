import React from 'react'
import StepsCard from './StepsCard'

/**
 * Función para mostrar la sección de pasos en el home
 * @returns Steps
 */

const Steps = () => {
    return (
        <div className='steps'>
            <div className="row row-no-padding">
                <div className="col-md-3 col-sm-6 col-xs-6 nopadding">
                    <StepsCard color='light-orange' number='1' title='Empieza aquí' subtitle='-Video introducción-'></StepsCard>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 nopadding">
                    <StepsCard color='dark-green' number='2' title='Incríbete' subtitle='-Forma de registro-'></StepsCard>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 nopadding">
                    <StepsCard color='dark-orange' number='3' title='Selecciona' subtitle='-Tu curso-'></StepsCard>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 nopadding">
                    <StepsCard color='light-orange' number='4' title='Explora' subtitle='-Bolsa de trabajo-'></StepsCard>
                </div>
            </div>
        </div>
    )
}

export default Steps
