import Slider from "react-slick";
import React, { Component } from 'react'
import './BodyStyle.css'
import './BodyBreackpoints.css'

export const BodyCardSlider3 = () => {
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
                <p className="p-title-products3">PRODUCTOS MÁS POPULARES</p>
                <Slider {...settings}>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="slider-card">
                            <div className="slider-card-image"><img src="src\assets\img\cardSlider3\Annotation 2020-06-11 225059.png" className="img-fluid" /></div>
                            <p className="slider-card-title">₡10 000</p>
                            <p className="slider-card-title">Miel con Chile Jalapeño</p>
                            <p className="slider-card-description">Botella de 250g - Piña, mango y nuestra mezcla de chiles ¡probala!</p>
                            <div className="d-flex justify-content-center btnAgregar btn">
                                <img src="src\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
                                Añadir a la carreta
                            </div>

                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="slider-card">
                            <div className="position-relative ">
                                <div className="position-absolute top-0 end-0 desc">
                                    <p className="desc_text">-10%</p>
                                </div>
                            </div>
                            <div className="slider-card-image"><img src="src\assets\img\cardSlider\miel_2_2.jpg" className="img-fluid" /></div>
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
                            <div className="slider-card-image"><img src="src\assets\img\cardSlider3\Annotation 2020-06-11 225825.png" className="img-fluid" /></div>
                            <p className="slider-card-title">₡2 500</p>
                            <p className="slider-card-title">Bee-utiful Gel Soap</p>
                            <p className="slider-card-description">400g - Mezcla de aceites esenciales de naranja, limón e ylang ylang.</p>
                            <div className="d-flex justify-content-center btnAgregar btn">
                                <img src="src\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
                                Añadir a la carreta
                            </div>

                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="slider-card">
                            <div className="position-relative ">
                                <div className="position-absolute top-0 start-0 new">
                                    <p className="new_text">Nuevo</p>
                                </div>
                                <div className="position-absolute top-0 end-0 desc">
                                    <p className="desc_text">-10%</p>
                                </div>
                            </div>
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