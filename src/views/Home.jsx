import React from 'react';
import Carousel from '../components/Carousel';
import Steps from '../components/Steps';
import Courses from '../components/Courses';
import Graduates from '../components/Graduates';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="title" content="Home" />
                <meta name="description" content="Descripcion del home" />
                <meta name="keywords" content="empleo, capacitacion" />
            </Helmet>
            <h1 className='hidden'>Capacítate para el empleo</h1>
            <Steps></Steps>
            <Carousel/>
            <Courses/>
            <Graduates/>
        </div>
    )
}

export default Home
