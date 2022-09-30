import Slider from "react-slick";
import React, { Component } from 'react'
import './BodyStyle.css'
import './BodyBreackpoints.css'
import { FormattedMessage } from 'react-intl';

export const BodyCardSlider4 = () => {
    var settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        className: 'reactslicksliderparent',
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
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
                <p id="#p-title-products" className="p-title-products4">
                    <FormattedMessage
                        id='BodyCardSlider4.titulo'
                        defaultMessage="EXPLORAR CATEGORIAS"
                    />
                </p>
                <Slider {...settings}>
                    <div className="d-inline-flex justify-content-center align-items-center">
                        <div className="card">
                            <div className="card-body">
                                <div className="card_category d-flex justify-content-center align-items-center">
                                    <span>
                                        <img src="\assets\img\cardSlider4\iconos_mercadito65x65px_blanco_alimentos.png" alt="Alimentos" />
                                    </span>
                                </div>
                                <p className="card_category_text">Alimentos</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-inline-flex justify-content-center align-items-center">
                        <div className="card">
                            <div className="card-body">
                                <div className="card_category d-flex justify-content-center align-items-center">
                                    <span>
                                        <img src="\assets\img\cardSlider4\iconos_mercadito65x65px_blanco_bebidas.png" alt="Alimentos" />
                                    </span>
                                </div>
                                <p className="card_category_text">Bebidas</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-inline-flex justify-content-center align-items-center">
                        <div className="card">
                            <div className="card-body">
                                <div className="card_category d-flex justify-content-center align-items-center">
                                    <span>
                                        <img src="\assets\img\cardSlider4\iconos_mercadito65x65px_blanco_regalos.png" alt="Alimentos" />
                                    </span>
                                </div>
                                <p className="card_category_text">Regalos y Souvenirs</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-inline-flex justify-content-center align-items-center">
                        <div className="card">
                            <div className="card-body">
                                <div className="card_category d-flex justify-content-center align-items-center">
                                    <span>
                                        <img src="\assets\img\cardSlider4\iconos_mercadito65x65px_blanco_mujer accsesorio.png" alt="Alimentos" />
                                    </span>
                                </div>
                                <p className="card_category_text">Mujer - Accesorios</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-inline-flex justify-content-center align-items-center">
                        <div className="card">
                            <div className="card-body">
                                <div className="card_category d-flex justify-content-center align-items-center">
                                    <span>
                                        <img src="\assets\img\cardSlider4\iconos_mercadito65x65px_blanco_mujer ropa.png" alt="Alimentos" />
                                    </span>
                                </div>
                                <p className="card_category_text">Mujer - Ropa</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-inline-flex justify-content-center align-items-center">
                        <div className="card">
                            <div className="card-body">
                                <div className="card_category d-flex justify-content-center align-items-center">
                                    <span>
                                        <img src="\assets\img\cardSlider4\iconos_mercadito65x65px_blanco_mujer deportiva.png" alt="Alimentos" />
                                    </span>
                                </div>
                                <p className="card_category_text">Mujer - Ropa Deportiva</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}
