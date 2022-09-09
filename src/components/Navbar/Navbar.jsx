import './NavbarStyles.css'
import { langContext } from '../../context/langContext';
import { FormattedMessage } from 'react-intl';
import MensajesEspañol from '../../lang/es.json'
import MensajesIngles from '../../lang/en.json'
import { useContext } from 'react';
import './NavbarBreackpoints.css'


export const Navbar = () => {

    const idioma = useContext(langContext);
    // console.log(idioma.establecerLenguaje())
    // onClick={()=>idioma.establecerlenguaje('en')

    return (
        <>
            <nav className="navbar navbar-expand-md NavbarH">
                <div className="container">
                    <div className='justify-content-between d-flex'>
                        <div>

                            <img src="src/assets/img/costa-rica.png" className="CR_bandera" />
                        </div>
                        <div >
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle buttonH" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Idiom
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" onClick={() => idioma.establecerLenguaje('es')}>Español</a></li>
                                    <li><a className="dropdown-item" onClick={() => idioma.establecerLenguaje('en')}>Ingles</a></li>
                                </ul>
                            </div>  
                            {/* <select id='selectI' className="form-select buttonH text-white" aria-label="Default select example">
                                <option id='es' value="Español">
                                    <FormattedMessage
                                        id='NavHeader.español'
                                        defaultMessage="Español"
                                    />
                                </option>
                                <option id='en' value="English">
                                    <FormattedMessage
                                        id='NavHeader.ingles'
                                        defaultMessage="Ingles"
                                    />
                                </option>
                            </select> */}
                        </div>
                        <div >
                            <select id='selectI' className="form-select buttonH text-white" aria-label="Default select example">
                                <option id='es' value="Español">CRC</option>
                                <option id='en' value="English">USD</option>
                            </select>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav justify-content-end d-flex me-auto w-100">
                            <li className="nav-item">
                                <button className="nav-link text-white buttonH">
                                    <FormattedMessage
                                        id='NavHeader.deseos'
                                        defaultMessage="LISTA DE DESEOS"
                                    />
                                </button>
                            </li>
                            <li className="nav-item ">
                                <button className="nav-link text-white buttonH">
                                <FormattedMessage
                                        id='NavHeader.ordenes'
                                        defaultMessage="MIS ORDENES"
                                    />
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-white buttonH">
                                <FormattedMessage
                                        id='NavHeader.micuenta'
                                        defaultMessage="MI CUENT"
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light navbarB">
                <div className="container ">
                    <div className='row w-100'>
                        <div id='column1' className='col-sm-12 col-md-6 col-lg-4 '>
                            <img src="src/assets/img/logo_MM.png" className="logo_MM img-fluid" />
                        </div>
                        <div id='column2' className='col-sm-12 col-md-6 col-lg-4'>
                            <form className="d-flex">
                                <input className="form-control input_search " type="search" placeholder="" aria-label="Search" />
                                <button className="btn btn-outline-success btn_search" type="submit">
                                    <FormattedMessage
                                        id='NavBody.buscar'
                                        defaultMessage="Buscar"
                                    />
                                </button>
                            </form>

                        </div>
                        <div id='column3' className='col-sm-12 col-lg-4 '>
                            <button className='buttonB text-white fw-bold '>
                                <FormattedMessage
                                    id='NavBody.carreta'
                                    defaultMessage="MI CARRETA: "
                                />
                                <span><img className='img_carrito img-fluid' src="src/assets/img/carrito.png" alt="carrito" /></span> ₡ 5 000.00</button>

                        </div>

                    </div>
                </div>
            </nav>
            <nav className='navbar navbar-expand-sm text-black '>
                <div id='navFooter' className='container d-flex justify-content-start'>
                    <button className='buttonF'>
                        <FormattedMessage
                            id='NavbarFooter.inicio'
                            defaultMessage="INICIO"
                        />
                    </button>
                    <div className="dropdown d-flex">
                        <button className="btn dropdown-toggle buttonF" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <FormattedMessage
                                id='NavbarFooter.categorias'
                                defaultMessage="CATEGORIAS"
                            />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <div id='dropdown_items' className='container d-flex'>
                                <div className='col-xs-12 col-md-6'>
                                    <li><a className="dropdown-item">Alimentos</a></li>
                                    <li><a className="dropdown-item">Bebidas</a></li>
                                    <li><a className="dropdown-item">Regalos y Souvenirs</a></li>
                                    <li><a className="dropdown-item">Cuidado personal</a></li>
                                    <li><a className="dropdown-item">Mujer - Accesorios</a></li>
                                    <li><a className="dropdown-item">Mujer - Ropa</a></li>
                                    <li><a className="dropdown-item">Mujer - Ropa deportiva</a></li>
                                    <li><a className="dropdown-item">Mujer - Ropa deportiva</a></li>
                                    <li><a className="dropdown-item">Hombre - Ropa</a></li>
                                    <li><a className="dropdown-item">Hombre - Ropa deportiva</a></li>
                                    <li><a className="dropdown-item">Bebé - Accesorios</a></li>
                                </div>
                                <div className='col-xs-12 col-md-6'>
                                    <li><a className="dropdown-item">Bebé - Cuidado personal</a></li>
                                    <li><a className="dropdown-item">Bebé - Ropa</a></li>
                                    <li><a className="dropdown-item">Arte</a></li>
                                    <li><a className="dropdown-item">Electrónica</a></li>
                                    <li><a className="dropdown-item">Hogar y Jardín</a></li>
                                    <li><a className="dropdown-item">Librería y literatura</a></li>
                                    <li><a className="dropdown-item">Música</a></li>
                                    <li><a className="dropdown-item">Instrumentos musicales</a></li>
                                    <li><a className="dropdown-item">Vehículo - Accesorios</a></li>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <button className='buttonF'>
                        <FormattedMessage
                            id='NavbarFooter.tiendas'
                            defaultMessage="TIENDAS"
                        />
                    </button>
                    <button className='buttonF'>
                        <FormattedMessage
                            id='NavbarFooter.historias'
                            defaultMessage="HISTORIAS"
                        />
                    </button>
                </div>
            </nav>
        </>
    )
}