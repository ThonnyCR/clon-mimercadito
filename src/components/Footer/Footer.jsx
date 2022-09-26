import React from 'react'
import './FooterStyle.css'
import './FooterBreackpoints.css'
import { FormattedMessage } from 'react-intl';

export const Footer = () => {
    return (
        <>
            <div className='container-fluid footer d-flex'>
                <div className='container justify-content-center container_m'>
                    <div className="row d-flex pt-5 columnf1">
                        <div id='columnf1' className='col-sm-12 col-md-12 col-lg-6 col-xl-3 columnf1'>
                            <img src="src\assets\img\footer\Recurso 3@ax.png " alt="Mi mercadito" className='img_m' />
                            <h3 className='txt '>
                                <FormattedMessage
                                    id='FooterTitulo.nosotros'
                                    defaultMessage="NOSOTROS"
                                />
                            </h3>
                            <h3 className='txt'>
                                <FormattedMessage
                                    id='FooterTexto.terminos'
                                    defaultMessage="Terminos y condiciones de uso"
                                />
                            </h3>
                            <h3 className='txt'>
                                <FormattedMessage
                                    id='FooterTexto.reglamento'
                                    defaultMessage="Reglamento de entregas y cambios"
                                />
                            </h3>
                            <h3 className='txt'>
                                <FormattedMessage
                                    id='FooterTexto.preguntas'
                                    defaultMessage="Preguntas frecuentes"
                                />
                            </h3>
                            <h3 className='txt'>
                                <FormattedMessage
                                    id='FooterTexto.acuerdo'
                                    defaultMessage="Acuerdo de privacidad"
                                />
                            </h3>
                        </div>
                        <hr className='hr-footer' />
                        <div id='columnf2' className="col-sm-12 col-md-12 col-lg-6 col-xl-3">
                            <h3 className='txt'>
                                <FormattedMessage
                                    id='FooterTitulo.nuestro'
                                    defaultMessage="NUESTRO SITIO:"
                                />
                            </h3>
                            <h3 className='txt'>
                                <FormattedMessage
                                    id='FooterTexto.productos'
                                    defaultMessage="Productos"
                                />
                            </h3>
                            <h3 className='txt'>
                                <FormattedMessage
                                    id='FooterTexto.tiendas'
                                    defaultMessage="Tiendas"
                                />
                            </h3>
                            <h3 className='txt'>
                                <FormattedMessage
                                    id='FooterTexto.blog'
                                    defaultMessage="Blog"
                                />
                            </h3>
                            <h3 className='txt'>
                                <FormattedMessage
                                    id='FooterTexto.contacto'
                                    defaultMessage="Contacto"
                                />
                            </h3>
                            <h3 className='txt fw-bold'>
                                <FormattedMessage
                                    id='FooterTexto.sitio'
                                    defaultMessage="Sitio para socios comerciales"
                                />
                            </h3>
                        </div>
                        <hr className='hr-footer' />

                        <div id='columnf3' className="col-sm-12 col-md-12 col-lg-6 col-xl-3 text-center">
                            <h3 className='txt'>
                                <FormattedMessage
                                    id='FooterTitulo.quieres'
                                    defaultMessage="¿QUIERES VENDER TUS PRODUCTOS EN MI MERCADITO?"
                                />
                            </h3>
                            <button className='bt_afiliate'>
                                <FormattedMessage
                                    id='FooterTexto.afiliate'
                                    defaultMessage="AFILIATE"
                                />
                            </button>
                        </div>
                        <div id='columnf4' className="col-sm-12 col-md-12 col-lg-6 col-xl-3">
                            <h3 className='txt'>
                                <FormattedMessage
                                    id='FooterTitulo.contacto'
                                    defaultMessage="CONTACTO:"
                                />
                            </h3>
                            <h3 className='txt'><span><img src="src\assets\img\footer\contact-us1.png" alt="Correo" className='txt_c' /></span>contacto@mimercadito.cr</h3>
                            <h3 className='txt'><span><img src="src\assets\img\footer\phone.png" alt="Teleono" className='txt_c' /></span>2234-6735</h3>
                            <h3 className='txt'><span><img src="src\assets\img\footer\wp.png" alt="Whatssap" className='txt_c' /></span>8913-9439</h3>
                            <div><img src="src\assets\img\footer\facebook copia.png" alt="Correo" className='img_c' /><img src="src\assets\img\footer\instagram.png" alt="Correo" className='' /></div>
                        </div>
                        <div id='columnf5' className="col-sm-12 col-md-12 col-lg-12 text-center d-flex justify-content-center">
                            <h3 className='txt'><span><img src="src\assets\img\footer\tarjeta1.png" alt="Correo" className='img_t' /></span></h3>
                            <h3 className='txt'><span><img src="src\assets\img\footer\tarjeta2.png" alt="Correo" className='img_t' /></span></h3>
                            <h3 className='txt'><span><img src="src\assets\img\footer\tarjeta3.png" alt="Correo" className='img_t' /></span></h3>
                            <h3 className='txt'><span><img src="src\assets\img\footer\tarjeta4.png" alt="Correo" className='img_t' /></span></h3>
                            <h3 className='txt'><span><img src="src\assets\img\footer\tarjeta5.png" alt="Correo" className='img_t' /></span></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer_f'>
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-lg-10 col-sm-12 col-md-12 d-flex justify-content-center align-items-center'>
                            <p className='footer_p'>© Mi Mercadito 2020 -
                                <FormattedMessage
                                    id='FooterTexto.derechos'
                                    defaultMessage="Todos los Derechos Reservados:"
                                />
                            </p>
                        </div>
                        <div className='col-lg-2 col-sm-12 col-md-12'>
                            <p className='footer_p2'>
                                <FormattedMessage
                                    id='FooterTexto.desarollado'
                                    defaultMessage="Desarrollado por"
                                />
                                <span><img src="src\assets\img\footer\decimo.png" alt="Decimo" className='img-fluid img_d' /></span></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
