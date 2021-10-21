import React, {useState} from 'react';
import Title from '../components/Title';
import CourseCard from './CourseCard';
import ImageCourse from '../assets/images/curso1.png';
import ImageSoon from '../assets/images/proximamente.png';

/**
 * Función para mostrar la sección de los cursos, los botones de los cursos muestra el contenido del curso.
 * @returns Courses
 */

const Courses = () => {
    
    const [clickButton, setClickButton] = useState('tecnologia')
    
    return (
        <section className='courses'>
            <div className="container">
                <h3>Cursos</h3>
                <h4>Selecciona la categoría de tu interés para ver los cursos disponibles</h4>
                <div className="categories">
                    <div><button type="button" className='color-btn administrativo' onClick={(e) => setClickButton(e.target.classList[1])}>Administrativo</button></div>
                    <div><button type="button" className='color-btn agropecuario' onClick={(e) => setClickButton(e.target.classList[1])}>Agropecuario</button></div>
                    <div><button type="button" className='color-btn alimentos' onClick={(e) => setClickButton(e.target.classList[1])}>Alimentos</button></div>
                    <div><button type="button" className='color-btn comercio' onClick={(e) => setClickButton(e.target.classList[1])}>Comercio</button></div>
                    <div><button type="button" className='color-btn construccion' onClick={(e) => setClickButton(e.target.classList[1])}>Construcción</button></div>
                    <div><button type="button" className='color-btn formacion' onClick={(e) => setClickButton(e.target.classList[1])}>Formación</button></div>
                    <div><button type="button" className='color-btn industria' onClick={(e) => setClickButton(e.target.classList[1])}>Industria</button></div>
                    <div><button type="button" className='color-btn mineria' onClick={(e) => setClickButton(e.target.classList[1])}>Minería</button></div>
                    <div><button type="button" className='color-btn moda' onClick={(e) => setClickButton(e.target.classList[1])}>Moda</button></div>
                    <div><button type="button" className='color-btn salud' onClick={(e) => setClickButton(e.target.classList[1])}>Salud</button></div>
                    <div><button type="button" className='color-btn servicio' onClick={(e) => setClickButton(e.target.classList[1])}>Servicio</button></div>
                    <div><button type="button" className='color-btn social' onClick={(e) => setClickButton(e.target.classList[1])}>Social</button></div>
                    <div><button type="button" className='color-btn tecnologia' onClick={(e) => setClickButton(e.target.classList[1])}>Tecnología</button></div>
                    <div><button type="button" className='color-btn transporte' onClick={(e) => setClickButton(e.target.classList[1])}>Transporte</button></div>
                </div>
                <div className="categories-container">
                    <p className='hidden'>{clickButton}</p>
                    <div className={clickButton === 'tecnologia' ? 'tecnologia active' : 'tecnologia'}>
                        <Title color='tecnologia' title='Tecnología de la información'></Title>
                        <div className="course-list">
                            <CourseCard title='Asistente Web' link='/' image={ImageCourse}/>
                            <CourseCard title='Técnico en Informática' link='/' image={ImageCourse}/>
                            <CourseCard title='Técnico en Redes de datos' link='/' image={ImageCourse}/>
                            <CourseCard title='Reparador de Celulares y tabletas' link='/' image={ImageCourse}/>
                            <CourseCard title='Técnico en instalación y reparación de equipo de computo' link='/' image={ImageCourse}/>
                        </div>
                        <div className="soon-course">
                            <h5>Próximamente</h5>
                            <div className="course-list disabled">
                                <CourseCard title='Curador de datos' link='/' image={ImageSoon}/>
                                <CourseCard title='finder' link='/' image={ImageSoon}/>
                            </div>
                            <h4>¿No tenemos el curso que buscas?</h4>
                            <a href="/" className='border-btn' title='Envía tu sugerencia aquí'>Envía tu sugerencia aquí</a>
                        </div>
                    </div>
                    <div className={clickButton === 'administrativo' ? 'administrativo active' : 'administrativo'}>
                        <Title color='administrativo' title='Administrativo'></Title>
                        <div className="container">
                            <div className="row">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A placeat ratione, inventore dicta adipisci sint, dolores impedit ipsa ipsum repudiandae aperiam eius tenetur! Eligendi dignissimos, fuga sint culpa quisquam ea?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Courses
