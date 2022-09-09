import React from 'react'
import './FooterStyle.css'
import './FooterBreackpoints.css'

export const Footer = () => {
    return (
        <>
            <div className='container-fluid footer d-flex'>
                <div className='container d-flex justify-content-center text-left'>
                    <div className="row d-flex pt-5">
                        <div id='column1' className='col-sm-12 col-md-12 col-lg-6 '>
                            {/* <img src="src\assets\img\footer\Recurso 3@ax.png " alt="Mi mercadito" className='img_m' /> */}
                            <h3 className='txt '>Nosotros</h3>
                            <h3 className='txt'>Terminos y condiciones de uso</h3>
                            <h3 className='txt'>Reglamento de entregas y cambios</h3>
                            <h3 className='txt'>Preguntas frecuentes</h3>
                            <h3 className='txt'>Acuerdo de privacidad</h3>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <h3 className='txt'>Productos</h3>
                            <h3 className='txt'>Tiendas</h3>
                            <h3 className='txt'>Blog</h3>
                            <h3 className='txt'>Contacto</h3>
                            <h3 className='txt fw-bold'>Sitio para socios comerciales</h3>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <h3 className='txt'>¿QUIERES VENDER TUS PRODUCTOS EN MI MERCADITO?</h3>
                            <button className='bt_afiliate'></button>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <h3 className='txt'>CONTACTO:</h3>
                            <h3 className='txt'>contacto@mimercadito.cr</h3>
                            <h3 className='txt'>2234-6735</h3>
                            <h3 className='txt'>8913-9439</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
