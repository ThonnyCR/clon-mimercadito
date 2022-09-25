import Slider from "react-slick";
import React, { Component } from 'react'
import './BodyStyle.css'
import './BodyBreackpoints.css'

import { FormattedMessage } from 'react-intl';
export const BodyCardSlider5 = () => {
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
                <p className="p-title-products3">
                    <FormattedMessage
                        id='BodyCardSlider5.titulo'
                        defaultMessage="PRODUCTOS CON DECUENTO"
                    />
                </p>
                <Slider {...settings}>
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
                            <div className="slider-card-image"><img src="src\assets\img\cardSlider5\amen.png" className="img-fluid" /></div>

                            <div className="d-flex align-items-center body_card">
                                <span>
                                    <h2 className='slider_card_desc d-flex'>₡2 684 <span className='slider_card_desc_ant'>₡2 825</span></h2>
                                    <p className="slider-card-title">Camiseta - AMEN (sin tilde)</p>
                                    <p className="slider-card-description">Color Blanco, Talla L - Camiseta - AMEN (sin tilde).</p>
                                    <div className="d-flex justify-content-center btnAgregar btn btn_fix">
                                        <img src="src\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
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
                                <div className="position-absolute top-0 end-0 desc">
                                    <p className="desc_text">-10%</p>
                                </div>
                            </div>
                            <div className="slider-card-image"><img src="src\assets\img\cardSlider\miel_2_2.jpg" className="img-fluid" /></div>

                            <div className="d-flex align-items-center body_card">
                                <span>
                                    <h2 className='slider_card_desc d-flex'>₡2 684 <span className='slider_card_desc_ant'>₡2 825</span></h2>
                                    <p className="slider-card-title">Miel con Chile Jalapeño</p>
                                    <p className="slider-card-description">Envase de vidrio 300g - Sabor fresco con un toque de acidez y picante.</p>
                                    <div className="d-flex justify-content-center btnAgregar btn">
                                        <img src="src\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
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
                                <div className="position-absolute top-0 end-0 desc">
                                    <p className="desc_text">-10%</p>
                                </div>
                            </div>
                            <div className="slider-card-image"><img src="src\assets\img\cardSlider5\drink.png" className="img-fluid" /></div>

                            <div className="d-flex align-items-center body_card">
                                <span>
                                    <h2 className='slider_card_desc d-flex'>₡2 684 <span className='slider_card_desc_ant'>₡2 825</span></h2>
                                    <p className="slider-card-title">Rooster - Healthy energy drink </p>
                                    <p className="slider-card-description">Pack Rooster Mixto - 12 unidades de 500 ml, sabores surtidos.</p>
                                    <div className="d-flex justify-content-center btnAgregar btn">
                                        <img src="src\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
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
                                <div className="position-absolute top-0 end-0 desc">
                                    <p className="desc_text">-10%</p>
                                </div>
                            </div>
                            <div className="slider-card-image"><img src="src\assets\img\cardSlider2\Chile+de+árbol.png" className="img-fluid" /></div>

                            <div className="d-flex align-items-center body_card">
                                <span>
                                    <h2 className='slider_card_desc d-flex'>₡2 684 <span className='slider_card_desc_ant'>₡2 825</span></h2>
                                    <p className="slider-card-title">Miel con Chile Jalapeño</p>
                                    <p className="slider-card-description">Envase de vidrio 300g - Sabor fresco con un toque de acidez y picante.</p>
                                    <div className="d-flex justify-content-center btnAgregar btn">
                                        <img src="src\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
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
                                <div className="position-absolute top-0 end-0 desc">
                                    <p className="desc_text">-10%</p>
                                </div>
                            </div>
                            <div className="slider-card-image"><img src="src\assets\img\cardSlider2\Chile+de+árbol.png" className="img-fluid" /></div>

                            <div className="d-flex align-items-center body_card">
                                <span>
                                    <h2 className='slider_card_desc d-flex'>₡2 684 <span className='slider_card_desc_ant'>₡2 825</span></h2>
                                    <p className="slider-card-title">Miel con Chile Jalapeño</p>
                                    <p className="slider-card-description">Envase de vidrio 300g - Sabor fresco con un toque de acidez y picante.</p>
                                    <div className="d-flex justify-content-center btnAgregar btn">
                                        <img src="src\assets\img\cardSlider\carreta_480x480.png" className="img-fluid" />
                                        <FormattedMessage
                                            id='BodyCardSlider1.btn'
                                            defaultMessage=" Añadir a la carreta"
                                        />
                                    </div>

                                </span>
                            </div>

                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}