import React from 'react'
import Slider from "react-slick";

/**
 * Componente para crear slider de banner del home
 * @param {object} settings Propiedades de configuración para el slider
 * @returns Slider
 */

const Carousel = () => {

    let settings = {
        arrows: true,
        dots: true,
        // autoplay: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    //Lista de banner a mostrar en el slider
    const items = [
        {
            title: 'Con tu certificado participas',
            subtitle: 'en bolsa de trabajo',
            image: 'https://i.picsum.photos/id/71/1800/700.jpg?blur=5&hmac=hv5BDd1EUbNFgQgnK3xw-eH1zrwNrBopqLbIJbc1JrU',
        },
    ]

    return (
        <div className="carousel-home">
            <Slider {...settings}>
                {items.map((item, index) => {
                    return(
                        <div className='slide-item' key='{index}'>
                            <img className='image' src={item.image} alt={item.title} />
                            <div className="description-slide-item">
                                <h2 className=''>{item.title}</h2>
                                <h3>{item.subtitle}</h3>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Carousel
