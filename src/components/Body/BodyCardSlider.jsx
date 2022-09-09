import Slider from "react-slick";
import React, { Component } from 'react'
import './BodyStyle.css'
import './BodyBreackpoints.css'

export const BodyCardSlider = () => {
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
                <p id="#p-title-products" className="p-title-products">PRODUCTOS DESTACADOS</p>
                <Slider {...settings}>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="slider-card">
                            <div className="slider-card-image"><img src="src/assets/img/cardSlider/miel_1_2.jpg" className="img-fluid" /></div>
                            <p className="slider-card-title">₡2 500</p>
                            <p className="slider-card-title">Miel con Chile Árbol</p>
                            <p className="slider-card-description">Envase de 70g - Sabor suave y delicado con toques almendrados.</p>
                            <div className="d-flex justify-content-center btnAgregar btn">
                                <img src="src\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
                                Añadir a la carreta
                            </div>
                            {/* <span className='d-flex justify-content-center'>
                                <img src="src\assets\img\cardSlider\Group 240.png" className="btnAgregar" />
                            </span> */}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="slider-card">
                            <div className="slider-card-image"><img src="src/assets/img/cardSlider/miel_2_2.jpg" className="img-fluid" /></div>
                            <p className="slider-card-title">₡2 684</p>
                            <p className="slider-card-title">Miel con Chile Jalapeño</p>
                            <p className="slider-card-description">Envase de vidrio 300g - Sabor fresco.</p>
                            <div className="d-flex justify-content-center btnAgregar btn">
                                <img src="src\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
                                Añadir a la carreta
                            </div>
                            {/* <span className='d-flex justify-content-center'>
                                <img src="src\assets\img\cardSlider\Group 240.png" className="btnAgregar" />
                            </span> */}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="slider-card">
                            <div className="slider-card-image"><img src="src/assets/img/cardSlider/MANTEQUILLA_ALMENDRA.jpg" className="img-fluid" /></div>
                            <p className="slider-card-title">₡2 500</p>
                            <p className="slider-card-title">Miel con Chile Almendras</p>
                            <p className="slider-card-description">Envase de vidrio 300g - Sabor fresco con un toque de acidez y picante.</p>
                            <div className="d-flex justify-content-center btnAgregar btn">
                                <img src="src\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
                                Añadir a la carreta
                            </div>
                            {/* <span className='d-flex justify-content-center'>
                                <img src="src\assets\img\cardSlider\Group 240.png" className="btnAgregar" />
                            </span> */}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="slider-card">
                            <div className="slider-card-image"><img src="src/assets/img/cardSlider/CHILE_PERRO.jpg" className="img-fluid" /></div>
                            <p className="slider-card-title">₡2 500</p>
                            <p className="slider-card-title">Miel con Chile Perro</p>
                            <p className="slider-card-description">Envase de vidrio 300g ' Sabor fresco con un toque de acidez y picante.</p>
                            <div className="d-flex justify-content-center btnAgregar btn">
                                <img src="src\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
                                Añadir a la carreta
                            </div>
                            {/* <span className='d-flex justify-content-center'>
                                <img src="src\assets\img\cardSlider\Group 240.png" className="btnAgregar" />
                            </span> */}
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
                            {/* <span className='d-flex justify-content-center'>
                                <img src="src\assets\img\cardSlider\Group 240.png" className="btnAgregar" />
                            </span> */}
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}
