import React from 'react'
import './BodyStyle.css'
import './BodyBreackpoints.css'
import { FormattedMessage } from 'react-intl';

export const BodyProductGroup = () => {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="section_product col-xl-4 col-xxl-4 col-lg-6 col-md-6 d-flex justify-content-center">
                        <div>
                            <h1 className='title_section'>
                                <FormattedMessage
                                    id='BodyProductsGroup1.titulo'
                                    defaultMessage="ALIMENTACIÓN Y BEBIDAS"
                                />
                            </h1>
                            <hr className='hr_title_section' />
                            <div className='d-flex card_product'>
                                <div>
                                    <div className="position-relative ">
                                        <div className="position-absolute top-0 start-0 new2">
                                            <p className="new_text2">Nuevo</p>
                                        </div>
                                    </div>
                                    <img src="src/assets/img/cardSlider/miel_2_2.jpg" className=" image_product " />
                                </div>
                                <div className='body_product d-flex align-items-center'>
                                    <span className=''>
                                        <h2 className='title_product'>Miel con Chile de Árbol</h2>
                                        <h2 className='description_product'>Envase de vidrio 70g - Sabor suave y delicado con toques almendrados.</h2>
                                        <h2 className='price_product'>₡2 500</h2>
                                    </span>
                                </div>
                            </div>
                            <div className='d-flex card_product'>
                                <div>
                                    <img src="src\assets\img\cardSlider\CHILE_PERRO.jpg" className=" image_product" />
                                </div>
                                <div className='body_product d-flex align-items-center'>
                                    <span className=''>
                                        <h2 className='title_product'>Miel con Chile de Árbol</h2>
                                        <h2 className='description_product'>Envase de vidrio 70g - Sabor suave y delicado con toques almendrados.</h2>
                                        <h2 className='price_product'>₡2 500</h2>
                                    </span>
                                </div>
                            </div>
                            <div className='d-flex card_product'>
                                <div>
                                    <div className="position-relative ">
                                        <div className="position-absolute top-0 start-0 new2">
                                            <p className="new_text2">Nuevo</p>
                                        </div>
                                    </div>
                                    <img src="src\assets\img\cardSlider2\Chile+de+árbol.png" className=" image_product" />
                                </div>
                                <div className='body_product d-flex align-items-center'>
                                    <span className=''>
                                        <h2 className='title_product'>Miel con Chile de Árbol</h2>
                                        <h2 className='description_product'>Envase de vidrio 70g - Sabor suave y delicado con toques almendrados.</h2>
                                        <h2 className='price_product'>₡2 500</h2>
                                    </span>
                                </div>
                            </div>
                            <div className='d-flex card_product'>
                                <div>
                                    <img src="src\assets\img\cardSlider\MANTEQUILLA_ALMENDRA.jpg" className=" image_product" />
                                </div>
                                <div className='body_product d-flex align-items-center'>
                                    <span className=''>
                                        <h2 className='title_product'>Miel con Chile de Árbol</h2>
                                        <h2 className='description_product'>Envase de vidrio 70g - Sabor suave y delicado con toques almendrados.</h2>
                                        <h2 className='price_product'>₡2 500</h2>
                                    </span>
                                </div>
                            </div>

                            <p className='d-flex justify-content-center btnVerMas btn'>
                                <FormattedMessage
                                    id='BodyProductsGroup.boton'
                                    defaultMessage="Ver más"
                                />
                            </p>
                        </div>

                    </div>
                    <div className="section_product col-xl-4 col-xxl-4 col-lg-6 col-md-6 d-flex justify-content-center">
                        <div>
                            <h1 className='title_section'>
                                <FormattedMessage
                                    id='BodyProductsGroup2.titulo'
                                    defaultMessage="ROPA Y ACCESORIOS"
                                />
                            </h1>
                            <hr className='hr_title_section' />
                            <div className='d-flex card_product'>
                                <div>
                                    <div className="position-relative ">
                                        <div className="position-absolute top-0 start-0 new2">
                                            <p className="new_text2">Nuevo</p>
                                        </div>
                                        <div className="position-absolute top-0 end-0 desc2">
                                            <p className="desc_text2">-5%</p>
                                        </div>
                                    </div>
                                    <img src="src\assets\img\productGroup\93397881_3196080913758448_4391795452492644352_n.png" className=" image_product" />
                                </div>
                                <div className='body_product d-flex align-items-center'>
                                    <span className=''>
                                        <h2 className='title_product'>Miel con Chile de Árbol</h2>
                                        <h2 className='description_product'>Envase de vidrio 70g - Sabor suave y delicado con toques almendrados.</h2>
                                        <h2 className='price_product_desc d-flex'>₡2 684 <span className='price_product_desc_ant'>₡2 825</span></h2>
                                    </span>
                                </div>
                            </div>
                            <div className='d-flex card_product'>
                                <div>
                                    <div className="position-relative ">
                                        <div className="position-absolute top-0 end-0 desc2">
                                            <p className="desc_text2">-5%</p>
                                        </div>
                                    </div>
                                    <img src="src\assets\img\productGroup\Annotation 2020-06-10 231948.png" className=" image_product" />
                                </div>
                                <div className='body_product d-flex align-items-center'>
                                    <span className=''>
                                        <h2 className='title_product'>Miel con Chile de Árbol</h2>
                                        <h2 className='description_product'>Envase de vidrio 70g - Sabor suave y delicado con toques almendrados.</h2>
                                        <h2 className='price_product_desc d-flex'>₡2 684 <span className='price_product_desc_ant'>₡2 825</span></h2>
                                    </span>
                                </div>
                            </div>
                            <div className='d-flex card_product'>
                                <div>
                                    <div className="position-relative ">
                                        <div className="position-absolute top-0 end-0 desc2">
                                            <p className="desc_text2">-5%</p>
                                        </div>
                                    </div>
                                    <img src="src\assets\img\cardSlider2\Negra_Back.png" className=" image_product" />
                                </div>
                                <div className='body_product d-flex align-items-center'>
                                    <span className=''>
                                        <h2 className='title_product'>Miel con Chile de Árbol</h2>
                                        <h2 className='description_product'>Envase de vidrio 70g - Sabor suave y delicado con toques almendrados.</h2>
                                        <h2 className='price_product_desc d-flex'>₡2 684 <span className='price_product_desc_ant'>₡2 825</span></h2>
                                    </span>
                                </div>
                            </div>
                            <div className='d-flex card_product'>
                                <div>
                                    <div className="position-relative ">
                                        <div className="position-absolute top-0 end-0 desc2">
                                            <p className="desc_text2">-5%</p>
                                        </div>
                                    </div>
                                    <img src="src\assets\img\productGroup\Annotation 2020-06-10 232025.png" className=" image_product" />
                                </div>
                                <div className='body_product d-flex align-items-center'>
                                    <span className=''>
                                        <h2 className='title_product'>Miel con Chile de Árbol</h2>
                                        <h2 className='description_product'>Envase de vidrio 70g - Sabor suave y delicado con toques almendrados.</h2>
                                        <h2 className='price_product_desc d-flex'>₡2 684 <span className='price_product_desc_ant'>₡2 825</span></h2>
                                    </span>
                                </div>
                            </div>

                            <p className='d-flex justify-content-center btnVerMas btn'>
                                <FormattedMessage
                                    id='BodyProductsGroup.boton'
                                    defaultMessage="Ver más"
                                />
                            </p>
                        </div>
                    </div>
                    <div className="section_product col-xl-4 col-xxl-4 col-lg-12 d-flex justify-content-center">
                        <div>
                            <h1 className='title_section'>
                                <FormattedMessage
                                    id='BodyProductsGroup3.titulo'
                                    defaultMessage="REGALOS Y SOUVENIRS"
                                />
                            </h1>
                            <hr className='hr_title_section' />
                            <div className='d-flex card_product'>
                                <div>
                                    <img src="src\assets\img\productGroup\HTB1mboxKFXXXXXbXFXXq6xXFXXXe.png" className=" image_product" />
                                </div>
                                <div className='body_product d-flex align-items-center'>
                                    <span className=''>
                                        <h2 className='title_product'>Miel con Chile de Árbol</h2>
                                        <h2 className='description_product'>Envase de vidrio 70g - Sabor suave y delicado con toques almendrados.</h2>
                                        <h2 className='price_product'>₡2 500</h2>
                                    </span>
                                </div>
                            </div>
                            <div className='d-flex card_product'>
                                <div>
                                    <div className="position-relative ">
                                        <div className="position-absolute top-0 start-0 new2">
                                            <p className="new_text2">Nuevo</p>
                                        </div>
                                    </div>
                                    <img src="src\assets\img\productGroup\mob-toucan-wood-sculptures(1).png" className=" image_product" />
                                </div>
                                <div className='body_product d-flex align-items-center'>
                                    <span className=''>
                                        <h2 className='title_product'>Miel con Chile de Árbol</h2>
                                        <h2 className='description_product'>Envase de vidrio 70g - Sabor suave y delicado con toques almendrados.</h2>
                                        <h2 className='price_product'>₡2 500</h2>
                                    </span>
                                </div>
                            </div>
                            <div className='d-flex card_product'>
                                <div>
                                    <img src="src\assets\img\productGroup\1872662.png" className=" image_product" />
                                </div>
                                <div className='body_product d-flex align-items-center'>
                                    <span className=''>
                                        <h2 className='title_product'>Miel con Chile de Árbol</h2>
                                        <h2 className='description_product'>Envase de vidrio 70g - Sabor suave y delicado con toques almendrados.</h2>
                                        <h2 className='price_product'>₡2 500</h2>
                                    </span>
                                </div>
                            </div>
                            <div className='d-flex card_product'>
                                <div>
                                    <img src="src\assets\img\productGroup\2019-05-03.png" className=" image_product" />
                                </div>
                                <div className='body_product d-flex align-items-center'>
                                    <span className=''>
                                        <h2 className='title_product'>Miel con Chile de Árbol</h2>
                                        <h2 className='description_product'>Envase de vidrio 70g - Sabor suave y delicado con toques almendrados.</h2>
                                        <h2 className='price_product'>₡2 500</h2>
                                    </span>
                                </div>
                            </div>

                            <p className='d-flex justify-content-center btnVerMas btn'>
                                <FormattedMessage
                                    id='BodyProductsGroup.boton'
                                    defaultMessage="Ver más"
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
