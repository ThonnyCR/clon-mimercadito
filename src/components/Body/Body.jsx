import React from 'react'
import './BodyStyle.css'
import './BodyBreackpoints.css'
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import { BodyCardSlider } from './BodyCardSlider';
import { BodyCardSlider2 } from './BodyCardSlider2';
import { BodyCardSlider3 } from './BodyCardSlider3';
import { BodyCardSlider4 } from './BodyCardSlider4';
import { BodyCardSlider5 } from './BodyCardSlider5';
import { BodyProductGroup } from './BodyProductGroup';

export const Body = () => {
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

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li id='li_carrousel' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></li>
                    <li id='li_carrousel' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></li>
                    <li id='li_carrousel' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="\assets\img\carousel\sorprendete.jpg" className="d-block w-100" alt="Sorprendete" />
                    </div>
                    <div className="carousel-item">
                        <img src="\assets\img\carousel\quaker.webp" className="d-block w-100" alt="Quaker" />
                    </div>
                    <div className="carousel-item">
                        <img src="\assets\img\carousel\frescos.webp" className="d-block w-100" alt="Despensa" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className='container d-flex P dimens'>
                <div className='row w-100'>
                    <div className="col-6 col-lg-3">
                        <div className='card_differentiator d-flex'>
                            <div className='col-2'>
                                <img src="\assets\img\differentiator\ico_entrega.png" className="d-flex img_card img-fluid" alt="..." />
                            </div>
                            <div className='d-block col-10'>
                                <h1 className='card_title'>
                                    <FormattedMessage
                                        id='BodyDiferenciadoresTitulo.entrega'
                                        defaultMessage="ENTREGA A DOMICILIO"
                                    />
                                </h1>
                                <h2 className='card_body'>
                                    <FormattedMessage
                                        id='BodyDiferenciadoresTexto.entrega'
                                        defaultMessage="Entregamos sus compras hasta la puerta de su casa u oficina."
                                    />
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className='card_differentiator d-flex '>
                            <div className='col-2'>
                                <img src="\assets\img\differentiator\ico_entrega.png" className="img-fluid img_card" alt="..." />
                            </div>
                            <div className='d-block col-10'>
                                <h1 className='card_title'>
                                    <FormattedMessage
                                        id='BodyDiferenciadoresTitulo.electronico'
                                        defaultMessage="PAGO ELECTRONICO"
                                    />
                                </h1>
                                <h2 className='card_body'>
                                    <FormattedMessage
                                        id='BodyDiferenciadoresTexto.electronico'
                                        defaultMessage="Podés pagar directamente con tu tarjeta de crédito o débito."
                                    />
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-lg-3">
                        <div className='card_differentiator d-flex'>
                            <div className='col-2'>
                                <img src="\assets\img\differentiator\ico_entrega.png" className="img-fluid img_card" alt="..." />
                            </div>
                            <div className='d-block col-10'>
                                <h1 className='card_title'>
                                    <FormattedMessage
                                        id='BodyDiferenciadoresTitulo.nacionales'
                                        defaultMessage="PRODUCTOS NACIONALES"
                                    />
                                </h1>
                                <h2 className='card_body'>
                                    <FormattedMessage
                                        id='BodyDiferenciadoresTexto.nacionales'
                                        defaultMessage="Todos los productos en Mi Mercadito son hechos en Costa Rica."
                                    />
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-lg-3">
                        <div className='card_differentiator d-flex'>
                            <div className='col-2'>
                                <img src="\assets\img\differentiator\ico_entrega.png" className="img-fluid img_card" alt="..." />
                            </div>
                            <div className='d-block col-10'>
                                <h1 className='card_title'>
                                    <FormattedMessage
                                        id='BodyDiferenciadoresTitulo.telefonico'
                                        defaultMessage="telefonico"
                                    />
                                </h1>
                                <h2 className='card_body'>
                                    <FormattedMessage
                                        id='BodyDiferenciadoresTexto.telefonico'
                                        defaultMessage="Escribirnos al 6128-1490 y con gusto te atenderemos."
                                    />
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BodyCardSlider />

            <div className='container d-flex justify-content-center'>
                <div className='container d-flex justify-content-center text-center'>
                    <div className='row w-100'>
                        <div className=" col-xl-6 col-lg-12 ads_img1">
                            <img src="/assets/img/ads/descargAPP.png" className="img-fluid" />
                        </div>
                        <div className=' col-xl-6 col-lg-12'>
                            <div className="row">
                                <div className="col-6 col-md-6 ads_img2">
                                    <img src="\assets\img\ads\Little Endian.png" className="float-end img-fluid" />
                                </div>
                                <div className="col-6 col-md-6 ">
                                    <img src="\assets\img\ads\Saucy King.png" className="float-start img-fluid" />
                                </div>
                                <div className="col-12 col-md-12 ">
                                    <img src="\assets\img\ads\Cerveza Artesanal.png" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BodyCardSlider2 />

            <div className='container d-flex justify-content-center text-center'>
                <div className='row w-100'>
                    <div className=" col-xl-6 col-lg-12 ads_acce_mujer">
                        <img src="\assets\img\ads\Accesorios Mujer.png" className="img-fluid " />
                    </div>
                    <div className=' col-xl-6 col-lg-12 '>
                        <img src="\assets\img\ads\Accesorios Perros.png" className="img-fluid" />
                    </div>
                </div>
            </div>

            <BodyCardSlider3 />

            <BodyCardSlider4 />

            <BodyCardSlider5/>
            <BodyProductGroup />
        </>
    )
}