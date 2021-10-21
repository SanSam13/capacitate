import React from 'react'
import { Helmet } from 'react-helmet';
const Us = () => {
    return (
        <div className='container'>
            <Helmet>
                <title>Conócenos</title>
                <meta name="title" content="Conócenos" />
                <meta name="description" content="Descripcion del Conócenos" />
                <meta name="keywords" content="empleo, capacitacion" />
            </Helmet>
            <h1 className='text-center'>Conócenos</h1>
        </div>
    )
}

export default Us
