import Slider from "react-slick";
import React, { Component } from 'react'
import './BodyStyle.css'
import './BodyBreackpoints.css'

export const BodyCardSlider2 = () => {
    var settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        className: 'reactslicksliderparent',
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="container">
                <p className="p-title-products2">PRODUCTOS NUEVOS E INCREIBLES</p>
                <Slider {...settings}>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="slider-card">
                            <div className="slider-card-image"><img src="src\assets\img\cardSlider2\Negra_Back.png" className="img-fluid" /></div>
                            <p className="slider-card-title">₡10 000</p>
                            <p className="slider-card-title">Camiseta - Vida Feroz</p>
                            <p className="slider-card-description">Color Negro, Talla XL - Camiseta - Vida Feroz.</p>
                            <div className="d-flex justify-content-center btnAgregar btn">
                                <img src="src\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
                                Añadir a la carreta
                            </div>

                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="slider-card">
                            <div className="slider-card-image"><img src="src\assets\img\cardSlider2\Negra_Back.png" className="img-fluid" /></div>
                            <p className="slider-card-title">₡10 000</p>
                            <p className="slider-card-title">Camiseta - Vida Feroz</p>
                            <p className="slider-card-description">Color Negro, Talla L - Camiseta - Vida Feroz.</p>
                            <div className="d-flex justify-content-center btnAgregar btn">
                                <img src="src\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
                                Añadir a la carreta
                            </div>

                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="slider-card">
                            <div className="slider-card-image"><img src="src\assets\img\cardSlider2\Beige_Back.png" className="img-fluid" /></div>
                            <p className="slider-card-title">₡10 000</p>
                            <p className="slider-card-title">Camiseta - Vida Feroz</p>
                            <p className="slider-card-description">Color Beige, Talla XL - Camiseta - Vida Feroz.</p>
                            <div className="d-flex justify-content-center btnAgregar btn">
                                <img src="src\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
                                Añadir a la carreta
                            </div>

                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="slider-card">
                            <div className="slider-card-image"><img src="src\assets\img\cardSlider2\Chile+de+árbol.png" className="img-fluid" /></div>
                            <p className="slider-card-title">₡2 684</p>
                            <p className="slider-card-title">Miel con Chile Jalapeño</p>
                            <p className="slider-card-description">Envase de vidrio 300g - Sabor fresco con un toque de acidez y picante.</p>
                            <div className="d-flex justify-content-center btnAgregar btn">
                                <img src="src\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
                                Añadir a la carreta
                            </div>

                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="slider-card">
                            <div className="slider-card-image"><img src="src/assets/img/cardSlider/miel_2_2.jpg" className="img-fluid" /></div>
                            <p className="slider-card-title">₡2 500</p>
                            <p className="slider-card-title">Miel con Chile Jalapeño</p>
                            <p className="slider-card-description">Envase de vidrio 300g - Sabor fresco.</p>
                            <div className="d-flex justify-content-center btnAgregar btn">
                                <img src="src\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
                                Añadir a la carreta
                            </div>

                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}