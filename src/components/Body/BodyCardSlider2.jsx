import Slider from "react-slick";
import React, { Component } from 'react'
import './BodyStyle.css'
import './BodyBreackpoints.css'
import { FormattedMessage } from 'react-intl';

export const BodyCardSlider2 = () => {
    var settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: 'reactslicksliderparent',
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
                <p className="p-title-products2">
                    <FormattedMessage
                        id='BodyCardSlider2.titulo'
                        defaultMessage="PRODUCTOS NUEVOS E INCREIBLES"
                    />
                </p>
                <Slider {...settings}>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="slider-card">
                            <div className="position-relative ">
                                <div className="position-absolute top-0 start-0 new">
                                    <p className="new_text">Nuevo</p>
                                </div>
                            </div>
                            <div className="slider-card-image"><img src="\assets\img\cardSlider2\Negra_Back.png" className="img-fluid" /></div>
                            <div className=" align-items-center body_card">
                                <span>
                                    {/* <p className="slider-card-title">₡10 000</p> */}
                                    <h2 className='slider_card_price d-flex'>₡10000</h2>
                                    <p className="slider-card-title">Camiseta - Vida Feroz</p>
                                    <p className="slider-card-description">Color Negro, Talla XL - Camiseta - Vida Feroz.</p>


                                </span>
                                <span>
                                    <div className="d-flex justify-content-center btnAgregar btn btn_fix">
                                        <img src="\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
                                        <FormattedMessage
                                            id='BodyCardSlider1.btn'
                                            defaultMessage=" Añadir a la carreta"
                                        />
                                    </div>
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="slider-card">
                            <div className="position-relative ">
                                <div className="position-absolute top-0 start-0 new">
                                    <p className="new_text">Nuevo</p>
                                </div>
                            </div>
                            <div className="slider-card-image"><img src="\assets\img\cardSlider2\Negra_Back.png" className="img-fluid" /></div>
                            {/* <p className="slider-card-title">₡10 000</p> */}
                            <h2 className='slider_card_price d-flex'>₡10000</h2>
                            <p className="slider-card-title">Camiseta - Vida Feroz</p>
                            <p className="slider-card-description">Color Negro, Talla L - Camiseta - Vida Feroz.</p>
                            <div className="d-flex justify-content-center btnAgregar btn btn_fix">
                                <img src="\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
                                <FormattedMessage
                                    id='BodyCardSlider1.btn'
                                    defaultMessage=" Añadir a la carreta"
                                />
                            </div>

                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="slider-card">
                            <div className="position-relative ">
                                <div className="position-absolute top-0 start-0 new">
                                    <p className="new_text">Nuevo</p>
                                </div>
                            </div>
                            <div className="slider-card-image"><img src="\assets\img\cardSlider2\Beige_Back.png" className="img-fluid" /></div>
                            {/* <p className="slider-card-title">₡10 000</p> */}
                            <h2 className='slider_card_price d-flex'>₡10000</h2>
                            <p className="slider-card-title">Camiseta - Vida Feroz</p>
                            <p className="slider-card-description">Color Beige, Talla XL - Camiseta - Vida Feroz.</p>
                            <div className="d-flex justify-content-center btnAgregar btn btn_fix">
                                <img src="\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
                                <FormattedMessage
                                    id='BodyCardSlider1.btn'
                                    defaultMessage=" Añadir a la carreta"
                                />
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

                            <div className="slider-card-image"><img src="\assets\img\cardSlider2\Chile+de+árbol.png" className="img-fluid" /></div>
                            <h2 className='slider_card_desc d-flex'>₡2 684 <span className='slider_card_desc_ant'>₡2 825</span></h2>
                            {/* <p className="slider-card-title">₡2 684</p> */}
                            <p className="slider-card-title">Miel con Chile Jalapeño</p>
                            <p className="slider-card-description">Envase de vidrio 300g - Sabor fresco con un toque de acidez y picante.</p>
                            <div className="d-flex justify-content-center btnAgregar btn ">
                                <img src="\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
                                <FormattedMessage
                                    id='BodyCardSlider1.btn'
                                    defaultMessage=" Añadir a la carreta"
                                />
                            </div>

                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="slider-card">
                            <div className="position-relative ">
                                <div className="position-absolute top-0 start-0 new">
                                    <p className="new_text">Nuevo</p>
                                </div>
                            </div>
                            <div className="slider-card-image"><img src="/assets/img/cardSlider/miel_2_2.jpg" className="img-fluid" /></div>
                            {/* <p className="slider-card-title">₡2 500</p> */}
                            <h2 className='slider_card_price d-flex'>₡10000</h2>
                            <p className="slider-card-title">Miel con Chile Jalapeño</p>
                            <p className="slider-card-description">Envase de vidrio 300g - Sabor fresco.</p>
                            <div className="d-flex justify-content-center btnAgregar btn btn_fix">
                                <img src="\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
                                <FormattedMessage
                                    id='BodyCardSlider1.btn'
                                    defaultMessage=" Añadir a la carreta"
                                />
                            </div>

                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}